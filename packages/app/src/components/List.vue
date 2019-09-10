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
          :key="index + 1"
          avatar
          ripple
          @click.prevent="handleClick(index)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action
            v-for="({ color, icon, name }, key) in actionButtons"
            :key="key"
            @click.stop="onActionClick(name, index)"
          >
            <v-btn icon>
              <v-icon
                :color="color"
              >
                {{icon}}
              </v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="index" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { actionButtons } from '../setups/createRoomForm.setup'

export default {
  name: 'List',
  data: () => ({
    actionButtons
  }),
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
    ...mapActions([
      'closeRoom'
    ]),
    editRoom(id) {
      this.$emit('onRetroEdit', id)
    },
    shareRoom(id) {
      this.$router.push(`retros/share/${id}`)
    },
    handleClick(id) {
      this.$emit('onRetroClick', id)
    },
    onActionClick(name, index) {
      this[`${name}Room`](index)
    }
  }
}
</script>
