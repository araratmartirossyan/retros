<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <List
          @onRetroClick="goTo"
          :items="retros"
          title="Avialiable Retrospectives"
          toolbarColor="red"
          isDark
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    List: () => import('../components/List')
  },
  computed: {
    ...mapGetters([
      'retros'
    ])
  },
  methods: {
    goTo(id) {
      this.$router.push(`retros/${id}`)
    }
  }
}
</script>
