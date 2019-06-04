<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>RetrEwoks</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isAuth">
        Add mark
      </v-btn>
      <v-btn
        flat
        @click="signOut"
      >
        <span class="mr-2">Log out</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'signOut'
    ])
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  }
}
</script>
