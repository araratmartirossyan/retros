<template>
  <div class="button-items">
    <div
      class="button"
      v-for="({ type, color, icon }, key) in menu"
      :key="key"
    >
      <v-btn
        @click="openMenu(type)"
        :color="color"
        fab
        large
        dark
      >
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { menu } from './menu.mock'

export default {
  name: 'MenuDialog',
  data: () => ({
    menu
  }),
  methods: {
    openMenu(type) {
      // this.$router.push(`/mark/create/${type}`)
    }
  }
}
</script>

<style lang="stylus">
  .button-items
    position fixed
    bottom 13%
    right 0
</style>
