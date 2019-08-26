<template>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          full-width
          lazy
          max-width="290"
          offset-y
          :return-value.sync="date"
          transition="slide-y-transition"
          v-model="menu"
        >
          <v-text-field
            slot="activator"
            append-icon="event"
            :browser-autocomplete="autocomplete"
            :clearable="!required && clearable"
            :label="labelComputed"
            :name="name"
            :readonly="readonly"
            :required="required"
            :rules="required ? rules : []"
            :value="date"
          />
          <v-date-picker
            color="secondary"
            :disabled="disabled"
            :locale="locale"
            :max="max"
            :min="min"
            no-title
            v-model="date"
          >
            <v-btn color="primary" flat @click="menu = false">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="UpdateValue">Select</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
</template>

<script>
import moment from 'moment'

export default {
  name: 'PdirPicker',
  props: {
    autocomplete: {
      type: String,
      default: 'off'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    label: {
      type: String,
      default: 'Select a date'
    },
    left: {
      type: Boolean,
      default: false
    },
    locale: {
      type: String,
      default: 'en-GB'
    },
    max: {
      type: String,
      default: null
    },
    min: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: true
    },
    value: {
      type: [Date, String],
      default: null
    }
  },
  // for date converting we can use next function new Date().toISOString().substr(0, 10)
  data: () => ({
    date: '',
    menu: false,
    rules: [value => !!value || 'Please select a date.']
  }),
  computed: {
    labelComputed() {
      return this.label && this.required ? `${this.label} *` : this.label
    }
  },
  watch: {
    value() {
      this.CheckDates()
    }
  },
  methods: {
    CheckDates() {
      if (this.value && moment(this.value)) {
        this.date = moment(this.value).format(this.format)
      }
    },
    UpdateValue() {
      this.$refs.menu.save(this.date)
      this.$emit('fieldUpdated', {
        key: this.name,
        value: this.date,
        text: this.date
      })
    }
  },
  mounted() {
    this.CheckDates()
  }
}
</script>
