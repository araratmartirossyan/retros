<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex
        v-for="(card, key) in cards"
        :key="key"
        xs12
        sm6
        md3
      >
        <h2>{{card.title}}</h2>
        <div
          class="item"
          v-for="(item, index) in marks"
          :key="index"
        >
          <MarkCard
            v-if="item.type === card.type"
            :cardColor="card.color"
            :mark="item"
          />
        </div>
      </v-flex>
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
    cards
  }),
  components: {
    MarkCard: () => import('../components/MarkCard'),
    Dialog: () => import('../components/Dialog'),
    MenuDialog: () => import('../components/MenuDialog')
  },
  mounted() {
    this.setRetroId()
  },
  destroyed() {
    this.openMenu()
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
      'openMenu'
    ])
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
