import { addRetro, getRetros } from '@retros/firebase-adapter'

const state = {
  retros: [],
  retroForm: {},
  roomForm: {
    title: '',
    date: new Date()
  }
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

const mutations = {
  updateRoomForm(_, { key, value }) {
    state.roomForm[key] = value
  }
}

const actions = {
  async createRoom({ dispatch }) {
    const { date, title } = state.roomForm
    const marks = getRetros()
    await addRetro(marks, {
      title,
      date
    })
    state.roomForm = {}
    await dispatch('closeDialog', {}, { root: true })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
