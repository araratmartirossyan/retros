<template>
  <div>
  <v-list-tile-action
    v-for="({ color, icon, name }, key) in buttons"
    :key="key"
  >
    <v-btn icon>
      <v-icon
        :color="color"
      >
        {{icon}}
      </v-icon>
    </v-btn>
  </v-list-tile-action>
  </div>
</template>

<script>
export default {
  name: 'ActionsBlock',
  props: {
    buttons: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(name) {
      this.$emit(`on${name}Click`)
    }
  }
}
</script>
