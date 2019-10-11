<template>
  <v-layout row>
    <div class="tollbar">
      <div class="left">
        <v-btn
          flat
          color="#000"
          class="back-button"
          @click="$router.push('/list')"
        >
          <v-icon>fas fa-arrow-left</v-icon>
          Back to room list
        </v-btn>
        <div class="tollbar-retro-block">
          <h2>{{roomDescription.title}}</h2>
          <div class="tollbar-retro-block__time">
            <v-icon color="#000">fas fa-clock</v-icon>
            <span>{{preloadTime}}</span>
          </div>
        </div>
      </div>
      <div class="right">

      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'retro-toolbar',
  props: {
    roomDescription: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    preloadTime() {
      const { weekDay, time, timeRange } = this.roomDescription
      return `${weekDay} at ${time}${timeRange}`
    }
  }
}
</script>
