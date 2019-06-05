<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="isModalOpen"
      width="500"
      :persistent="true"
    >
      <v-card>
        <slot />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Dialog',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isModalOpen: false
  }),
  computed: {
    ...mapGetters([
      'isMenuOpen',
      'modalName'
    ]),
    ...mapMutations([
      'openMenu'
    ])
  },
  watch: {
    isMenuOpen() {
      this.isModalOpen = this.isMenuOpen && this.modalName === this.name
    }
  }
}
</script>
