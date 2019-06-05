<template>
  <div class="dialog-form">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs6>
          <v-textarea
            name="text"
            label="Your Mark"
            @input="updateMarkForm"
            :value="markForm.text"
            hint="Hint text"
          />
          <v-btn @click="$emit('pushToStrim')">
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
