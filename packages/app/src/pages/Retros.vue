<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <LineWrapper title="Active retros" :sizes="['md4', 'xs12', 'sm6']">
        <v-btn
          flat
          icon
          small
          color="black"
          class="controlled"
          @click="openMenu('roomForm')"
          slot="header"
        >
          <v-icon>fas fa-plus-circle</v-icon>
        </v-btn>
        <RetroCard
          slot="content"
          v-for="(item, key) in activeRetros"
          :key="key"
          :item="item"
          :id="key"
          @onRetroClick="goTo"
          @onRetroEdit="getRoom"
        />
      </LineWrapper>
      <LineWrapper title="Archive" :sizes="['md4', 'xs12', 'sm6']">
        <RetroCard
          v-for="(item, key) in finishedRetros"
          :key="key"
          :item="item"
          :id="key"
          @onRetroClick="goTo"
          @onRetroEdit="getRoom"
          slot="content"
        />
      </LineWrapper>
    </v-layout>
    <Dialog name="roomForm">
      <CreateRoomForm />
    </Dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    CreateRoomForm: () => import('../components/CreateRoomForm'),
    Dialog: () => import('../components/Dialog'),
    RetroCard: () => import('../components/RetroRoomCard'),
    LineWrapper: () => import('../components/LineWrapper')
  },
  computed: {
    ...mapGetters([
      'activeRetros',
      'finishedRetros'
    ])
  },
  methods: {
    ...mapActions([
      'getRoom'
    ]),
    ...mapMutations([
      'openMenu'
    ]),
    goTo(id) {
      this.$router.push(`retros/${id}`)
    }
  }
}
</script>

<style lang="stylus">
  .controlled
    margin 0
</style>
