import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import marks from './modules/marks'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    marks
  }
})

export default store
