<template>
  <div class="auth">
    <div class="auth-box">
      <div class="auth-box_left">
        <h3>Welcome to {{logo}}</h3>
        <span>An open application for retrospectives for make it simple. Are you ready?</span>
        <LoginForm
          @updateLoginForm="updateLoginForm"
          @onLogin="handleSubmit"
          :loginFrom="loginForm"
        />
        or
        <SocialLogin @onClick="googleAuth" />
      </div>
      <div class="auth-box_right" />
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
  data: () => ({
    loader: () => {},
    logo: '<Retros />'
  }),
  components: {
    LoginForm: () => import('../components/LoginForm'),
    SocialLogin: () => import('../components/SocialLogin')
  },
  methods: {
    ...mapActions({
      handleSubmit: 'signIn',
      googleAuth: 'googleAuth'
    }),
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
  borderRadius = 25px
  cardBg = #1698e9

  .auth-box
    justify-content flex-start
    align-items center
    display flex
    margin 5%
    box-shadow 0 16px 40px rgba(0,0,0,0.12)
    border-radius 12px

    &_left
      width 30%
      height 80vh
      padding 40px
      background #fff
      border-top-left-radius 12px
      border-bottom-left-radius 12px

      h3
        color black
        font-weight 300
        font-size 2em

      span
        display block
        color #black
        font-weight 300
        font-size 1.2em
        margin-bottom 20px

    &_right
      background-image url('https://firebasestorage.googleapis.com/v0/b/retrewoks.appspot.com/o/15301.jpg?alt=media&token=edd7ae77-e77e-4d31-b242-fa4b18fa25ba')
      background-size cover
      width 70%
      height 80vh
      border-top-right-radius 12px
      border-bottom-right-radius 12px

  .logo
    font-size 4em
    padding 20px
    position absolute
    color black
    font-family Source Sans Pro,Arial,sans-serif
</style>
