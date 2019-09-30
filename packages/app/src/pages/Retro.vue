<template>
  <v-container
    grid-list-md
    :class="{
      fluid: windowWidth < 1904
    }"
  >
    <v-layout row wrap>
      <LineWrapper
        v-for="({ color, title, type }, key) in cards"
        :key="key"
        :title="title"
        :sizes="['md3', 'xs12', 'sm6']"
      >
        <div
          slot="content"
          class="item"
          v-for="(item, index) in marks"
          :key="index"
        >
          <MarkCard
            v-if="item.type === type"
            :cardColor="color"
            :mark="item"
          />
        </div>
      </LineWrapper>
    </v-layout>
    <Dialog name="menu">
      <MenuDialog />
    </Dialog>
    <div class="float-button">
      <v-btn
        @click="openMenu('menu')"
        color="success"
        fab
        large
        dark
      >
        <v-icon v-if="isMenuOpen">close</v-icon>
        <v-icon v-else>add</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { cards } from './mark.mock'

export default {
  name: 'Home',
  data: () => ({
    cards,
    windowWidth: window.innerWidth
  }),
  components: {
    MarkCard: () => import('../components/MarkCard'),
    Dialog: () => import('../components/Dialog'),
    MenuDialog: () => import('../components/MenuDialog'),
    LineWrapper: () => import('../components/LineWrapper')
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    this.setRetroId()
    this.forceCloseDialog()
  },
  destroyed() {
    this.forceCloseDialog()
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapGetters([
      'marks',
      'isMenuOpen'
    ])
  },
  methods: {
    ...mapActions([
      'pushMark'
    ]),
    ...mapMutations([
      'setRetroId',
      'openMenu',
      'forceCloseDialog'
    ]),
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="stylus">
  .float-button
    position fixed
    bottom 0
    right 0
    z-index 9999
</style>
