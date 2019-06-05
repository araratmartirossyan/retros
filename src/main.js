import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './stores'
import './plugins/vuetify'
import 'firebase/auth'


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyAuuV9Yn3CHXLJM09tFwS0NsZrGznidgTI',
  authDomain: 'retrewoks.firebaseapp.com',
  databaseURL: 'https://retrewoks.firebaseio.com',
  projectId: 'retrewoks',
  storageBucket: 'retrewoks.appspot.com',
  messagingSenderId: '821153639587',
  appId: '1:821153639587:web:10250af2ac0f0fad'
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
