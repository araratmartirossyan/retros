<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 2" :key="`6${i}`" xs12 sm6 md6>
        <v-card dark color="secondary">
          <v-card-text class="px-0" v-for="(item, key) in marks" :key="key">
            {{item.title}}
          </v-card-text>
          <v-btn
            flat
            @click="pushMark"
          >
            <span class="mr-2">Push Mark</span>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'marks'
    ])
  },
  methods: {
    ...mapActions([
      'pushMark'
    ])
  }
}
</script>
