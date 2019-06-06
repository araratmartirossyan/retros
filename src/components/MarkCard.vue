<template>
  <v-card
    class="mx-auto"
    :color="cardColor"
    dark
    max-width="400"
  >
    <v-card-text class="headline font-weight-bold">
      "{{mark.text}}"
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="mark.userAvatar"
          />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{mark.userName}}
          </v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MarkCard',
  props: {
    mark: {
      type: Object,
      default: () => ({
        text: 'Some text',
        userName: 'Evan You',
        type: 'bad',
        userAvatar: ''
      })
    },
    cardColor: {
      type: String,
      default: '#d23232'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mx-auto
    margin-bottom 10px!important
</style>
