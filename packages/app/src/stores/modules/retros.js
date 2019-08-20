import firebase from 'firebase'

const state = {
  retros: [],
  retroForm: {}
}

const getters = {
  retros: () => {
    const marks = firebase.database().ref('retros')
    marks.on('value', (snapshot) => { state.retros = snapshot.val() })
    return state.retros
  }
}

const mutations = {
}

const actions = {
  createRetro() {
    const marks = firebase.database().ref('retros')
    marks.push({
      title: 'Retro Sprint 19',
      date: '2019-01-01'
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
