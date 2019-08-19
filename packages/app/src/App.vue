<template>
  <v-app>
    <v-toolbar app v-if="isAuth">
      <v-toolbar-title class="headline text-uppercase">
        <span
          @click="$router.push('/list')"
        >
          RetrEwoks
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="signOut" flat>
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
