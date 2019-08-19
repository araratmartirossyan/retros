<template>
  <v-card>
    <v-toolbar
      :color="toolbarColor"
      :dark="isDark"
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile
          :key="index"
          avatar
          ripple
          @click="handleClick(index)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-divider :key="index" /> -->
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: [Array, Object],
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    toolbarColor: {
      type: String,
      default: 'green'
    },
    isDark: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick(id) {
      this.$emit('onRetroClick', id)
    }
  }
}
</script>
