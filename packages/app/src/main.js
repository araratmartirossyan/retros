import Vue from 'vue'
import { onAuth } from '@retros/firebase-adapter'
import App from './App.vue'
import router from './router'
import store from './stores'
import './plugins/vuetify'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    onAuth((user) => {
      console.log(user)
      if (!user) {
        this.$router.push('/')
      } else {
        this.$router.push('/list')
        this.$store.commit('putAuth')
        this.$store.commit('setGoogleUser', user)
      }
    })
  }
}).$mount('#app')
