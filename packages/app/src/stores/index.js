import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import marks from './modules/marks'
import retros from './modules/retros'
import uix from './modules/uix'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    marks,
    retros,
    uix
  }
})

export default store
