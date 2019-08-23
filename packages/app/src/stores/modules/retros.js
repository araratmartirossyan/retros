import { addRetro, getRetros } from '@retros/firebase-adapter'

const state = {
  retros: [],
  retroForm: {}
}

const getters = {
  retros: () => {
    const marks = getRetros()
    marks.on('value', (snapshot) => {
      state.retros = snapshot.val()
    })
    return state.retros
  }
}

const mutations = {}

const actions = {
  createRetro() {
    const marks = getRetros()
    addRetro(marks, {
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
