<template>
  <div class="auth-box">
    <div class="logo">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/retrewoks.appspot.com/o/New%20Project.png?alt=media&token=16db94b3-37a5-4f38-9a95-6c0af4316b38"
      />
    </div>
    <v-btn
      color="white"
      type="danger"
      @click="googleAuth"
    >
      Login
    </v-btn>
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
  .auth-box
    background-color rgb(255, 98, 0)
    height 100vh
    justify-content center
    align-items center
    display flex
    flex-direction column

    .logo img
      width 120px
      height 120px
</style>
