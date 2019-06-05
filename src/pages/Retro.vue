<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <div
          class="item"
          v-for="(item, index) in marks"
          :key="index"
        >
          <MarkCard
            v-if="item.type === 'bad'"
            :mark="item"
          />
        </div>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <div
          class="item"
          v-for="(item, index) in marks"
          :key="index"
        >
          <MarkCard
            v-if="item.type === 'good'"
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

export default {
  name: 'Home',
  components: {
    MarkCard: () => import('../components/MarkCard'),
    Dialog: () => import('../components/Dialog'),
    MenuDialog: () => import('../components/MenuDialog')
  },
  mounted() {
    this.setRetroId()
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
