<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-btn
        color="red"
        class="white--text"
        @click="openMenu('roomForm')"
      >Create new room</v-btn>
      <v-flex xs12 sm12 md12>
        <RetroCard
          v-for="(item, key) in retros"
          :key="key"
          :item="item"
          :id="key"
          @onRetroClick="goTo"
          @onRetroEdit="getRoom"
        />
        <!-- <List
          @onRetroClick="goTo"
          @onRetroEdit="getRoom"
          :items="retros"
          title="Avialiable Retrospectives"
          toolbarColor="red"
          isDark
        /> -->
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
    List: () => import('../components/List'),
    CreateRoomForm: () => import('../components/CreateRoomForm'),
    Dialog: () => import('../components/Dialog'),
    RetroCard: () => import('../components/RetroRoomCard')
  },
  computed: {
    ...mapGetters([
      'retros'
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
