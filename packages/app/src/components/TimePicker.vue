<template>
  <div class="time-picker">
    <v-flex xs6 lg6 md6>
      <v-text-field
        name="time"
        label="Pick time"
        placeholder="Retro Time"
        @input="value => $emit('updateTime', {
          value,
          key: 'time'
        })"
        mask="##:##"
        :value="time"
      />
      <v-select
        :items="['pm', 'am']"
        :value="timeRange"
        @change="value => $emit('updateTime', {
          key: 'timeRange',
          value
        })"
      />
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'time-picker',
  props: {
    time: {
      type: String,
      default: '00:00 am'
    },
    timeRange: {
      type: String,
      default: 'pm'
    }
  }
}
</script>
