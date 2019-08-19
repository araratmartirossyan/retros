import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './stores'
import './plugins/vuetify'
import 'firebase/auth'


Vue.config.productionTip = false

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} = process.env

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
}
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/login')
      } else {
        this.$router.push('/list')
        this.$store.commit('putAuth')
        this.$store.commit('setGoogleUser', user)
      }
    })
  }
}).$mount('#app')
