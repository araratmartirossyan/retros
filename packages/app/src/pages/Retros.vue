<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4 sm4 md4 text-md-left>
        <div class="room-card_holder">
          <div class="column-holder">
            <h2>Active retros</h2>
            <v-btn
              flat
              icon
              color="black"
              class="controlled"
              @click="openMenu('roomForm')"
              small
            >
              <v-icon>fas fa-plus-circle</v-icon>
            </v-btn>
          </div>
          <RetroCard
            v-for="(item, key) in activeRetros"
            :key="key"
            :item="item"
            :id="key"
            @onRetroClick="goTo"
            @onRetroEdit="getRoom"
          />
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4 text-md-left>
        <div class="room-card_holder">
          <div class="column-holder">
            <h2>Finished retros</h2>
          </div>
          <RetroCard
            v-for="(item, key) in finishedRetros"
            :key="key"
            :item="item"
            :id="key"
            @onRetroClick="goTo"
            @onRetroEdit="getRoom"
          />
        </div>
      </v-flex>
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
    RetroCard: () => import('../components/RetroRoomCard')
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
  .room-card_holder
    background #f3f3f3
    text-align -webkit-center
    box-shadow 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
    padding 10px 0 10px 0
    border-radius 6px

  .controlled
    margin 0
    &:before
      &:hover
        background-color none

  .column-holder
    text-align left
    margin 10px 5%
    display flex
    justify-content space-between
</style>
