<template>
  <div class="auth">
    <div class="auth_card">
      <div class="auth_card_header">
        Authorization
      </div>
      <div class="auth_card_container">
        <div class="auth-form">
          <div class="form-item">
            <span class="label">Email</span>
            <v-text-field
              placeholder="Email"
              @input="value => updateLoginForm({
                key: 'email',
                value
              })"
              :value="loginForm.email"
              name="email"
              autocomplete
            />
          </div>
          <div class="form-item">
            <span class="label">Password</span>
            <v-text-field
              placeholder="Password"
              @input="value => updateLoginForm({
                key: 'password',
                value
              })"
              :value="loginForm.password"
              name="password"
              type="password"
            />
          </div>
        </div>
      </div>
      <div class="auth_card_footer">
        <div class="alert_dialog">
          <v-alert
            :value="error.stateError"
            type="error"
            v-if="error.stateError"
          >
            {{error.message}}
          </v-alert>
        </div>
        <v-btn color="primary"
          type="danger"
          @click="handleLogin"
        >
          Log in
        </v-btn>
         <v-btn color="primary"
          type="danger"
          @click="googleAuth"
        >
          Google Auth
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapMutations,
  mapState,
  mapGetters
} from 'vuex'

export default {
  name: 'Auth',
  // watch: {
  //   loading() {
  //     this.loader.close()
  //   }
  // },
  data: () => ({
    loader: () => {}
  }),
  methods: {
    ...mapActions({
      handleSubmit: 'signIn',
      googleAuth: 'googleAuth'
    }),
    handleLogin() {
      // this.loader = this.$loading({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // })
      this.handleSubmit()
    },
    ...mapMutations([
      'updateLoginForm',
      'hideError'
    ])
  },
  computed: {
    ...mapState({
      loginForm: state => state.login.loginForm,
      loading: state => state.login.loading
    }),
    ...mapGetters({
      error: 'loginError'
    })
  }
}
</script>

<style lang="stylus">
  .auth
    display flex
    align-items center
    justify-content center
    height 100vh
    background #f6f6f6

    &_card
      background #fff
      width 500px
      border-radius 6px
      max-width 50%
      box-shadow 0 2px 2px 0 rgba(0,0,0,0.14),
        0 3px 1px -2px rgba(0,0,0,0.12),
        0 1px 5px 0 rgba(0,0,0,0.2)

      &_header
        height 48px
        border-bottom 1px solid #d23232
        display flex
        align-items center
        padding-left 20px

      &_container
        padding 24px 24px 0 24px

      &_footer
        padding 0 24px 24px 24px

  .form-item
    display flex
    flex-direction column
    align-items baseline
    margin-bottom 15px
    .v-input
      width 100%

    .label
      margin-bottom 5px

  .alert_dialog
    margin-bottom 14px
</style>
