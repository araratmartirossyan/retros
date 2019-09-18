<template>
  <div class="login-form">
    <v-flex xs12 lg12>
      <v-text-field
        name="email"
        label="Enter your email"
        placeholder="Email account"
        @input="value => updateLoginForm({
          value,
          key: 'email'
        })"
      />
    </v-flex>
    <v-flex xs12 lg12>
      <v-text-field
        name="password"
        label="Enter your password"
        placeholder="Password"
        type="password"
        @input="value => updateLoginForm({
          value,
          key: 'password'
        })"
      />
    </v-flex>
    <v-btn
      class="white--text"
      color="#434a64"
      @click="$emit('onLogin')"
      block
    >
      Log in
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'WrapperBox',
  props: {
    loginForm: {
      type: Object,
      default: () => ({
        email: '',
        password: ''
      })
    }
  },
  methods: {
    updateLoginForm(payload) {
      this.$emit('updateLoginForm', payload)
    }
  }
}
</script>
