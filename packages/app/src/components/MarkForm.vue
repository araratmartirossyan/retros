<template>
  <div class="dialog-form">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-textarea
            name="text"
            label="Your Mark"
            @input="updateMarkForm"
            :value="markForm.text"
            hint="Hint text"
          />
        </v-flex>
        <v-flex xs12>
          <v-btn
            class="submit-btn"
            large
            light
            @click="$emit('pushToStrim')"
            :disabled="disabled"
            color="#ff6200"
          >
            Push to stream
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MarkForm',
  props: {
    markForm: {
      type: Object
    }
  },
  computed: {
    disabled() {
      return this.markForm.text.length < 4
    }
  },
  methods: {
    updateMarkForm(value) {
      this.$emit('updateForm', {
        key: 'text',
        value
      })
    }
  }
}
</script>

<style lang="stylus">
  .submit-btn
    margin 0
    width 100%

    .v-btn__content
      color #fff
</style>
