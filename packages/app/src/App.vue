<template>
  <v-app>
    <v-toolbar
      app
      v-if="isAuth"
      class="main-header elevation-0"
    >
      <v-toolbar-title class="headline text-uppercase">
        <span
          @click="$router.push('/list')"
        >
          {{logo}}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="user-block">
        <v-avatar>
          <img
            v-if="userProfile.photoURL"
            :src="userProfile.photoURL"
            alt="user avatar"
          >
        </v-avatar>
      </div>
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
  @import "assets/styles/variable.styl"

  #app
    background mainBackgroundColor

  .main-header
    margin-top 20px
    color #fff

    nav
      padding-top 30px
</style>
