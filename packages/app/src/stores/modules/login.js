import firebase from 'firebase'
import router from '../../router'

const state = {
  loginForm: {
    email: '',
    password: ''
  },
  tokenError: '',
  error: false,
  loading: false,
  isAuth: false
}

const getters = {
  loginError: () => ({
    message: state.tokenError.message,
    stateError: state.error
  }),
  isAuth: () => state.isAuth
}

const mutations = {
  updateLoginForm(_, { key, value }) {
    state.loginForm[key] = value
  },
  setToken(_, { uid, ra }) {
    localStorage.setItem('accessToken', ra)
    localStorage.setItem('uid', uid)
    router.replace('/home')
    state.isAuth = true
  },
  putAuth() {
    state.isAuth = true
  },
  setGoogleUser(_, {
    displayName,
    email,
    photoURL,
    uid
  }) {
    state.userProfile = {
      displayName,
      email,
      photoURL,
      uid
    }
  },
  setTokenError(_, err) {
    state.tokenError = {
      message: err.message
    }
    state.error = true
  },
  setLoading() {
    state.loading = !state.loading
  },
  hideError() {
    state.tokenError = ''
    state.error = false
  },
  setLogOut() {
    state.isAuth = false
  }
}

const actions = {
  async signOut({ commit }) {
    await firebase.auth().signOut()
    commit('setLogOut')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('uid')
    router.replace('/login')
  },
  async googleAuth({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    const { user } = await firebase.auth().signInWithPopup(provider)
    await commit('setGoogleUser', user)
    await commit('putAuth', user)
  },
  async signIn({ commit }) {
    commit('setLoading')
    try {
      const { email, password } = state.loginForm
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
      await commit('setToken', user)
      await commit('setLoading')
    } catch (err) {
      await commit('setTokenError', err)
      await commit('setLoading')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
