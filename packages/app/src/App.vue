<template>
  <v-app>
    <v-toolbar app v-if="isAuth">
      <v-toolbar-title class="headline text-uppercase">
        <span
          @click="$router.push('/list')"
        >
          {{logo}}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar>
        <img
          v-if="userProfile.photoURL"
          :src="userProfile.photoURL"
          alt="user avatar"
        >
      </v-avatar>
      <v-btn @click="signOut" flat>
        <span class="mr-2">Log out</span>
      </v-btn>
    </v-toolbar>

    <v-content class="main-content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    logo: '<Retros />'
  }),
  methods: {
    ...mapActions([
      'signOut'
    ])
  },
  computed: {
    ...mapGetters([
      'isAuth',
      'userProfile'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  #app
    background #e1bea2
  // font-family: 'Raleway', sans-serif;
  // font-family: 'Open Sans', sans-serif;
  // font-family: 'Roboto', sans-serif;
  // font-family: 'Source Sans Pro', sans-serif;
</style>
