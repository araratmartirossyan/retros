import {
  addRetro,
  getRetros,
  removeRetro,
  getRoom,
  updateRoom
} from '@retros/firebase-adapter'

const state = {
  retros: [],
  retroForm: {},
  roomForm: {
    title: '',
    date: new Date(),
    isEdit: false
  }
}

const getters = {
  retros: () => {
    const marks = getRetros()
    marks.on('value', (snapshot) => {
      state.retros = snapshot.val()
    })
    return state.retros
  },
  getRoom: () => state.roomForm
}

const mutations = {
  updateRoomForm(_, { key, value }) {
    state.roomForm[key] = value
  },
  setRoom(_, room) {
    state.roomForm = {
      ...room,
      isEdit: true
    }
  }
}

const actions = {
  async getRoom({ commit }, id) {
    try {
      const room = await getRoom(id)
      await commit('setRoom', {
        ...room,
        id
      })
      await commit('openMenu', 'roomForm', { root: true })
    } catch (err) {
      console.warn('get room failed', err)
    }
  },
  async updateRoom({ dispatch }) {
    const { date, title, id } = state.roomForm
    try {
      await updateRoom(id, {
        date,
        title
      })
      state.roomForm = {}
      await dispatch('closeDialog', {}, { root: true })
    } catch (err) {
      console.warn(err)
    }
  },
  async createRoom({ dispatch }) {
    const { date, title } = state.roomForm
    const marks = getRetros()
    await addRetro(marks, {
      title,
      date
    })
    state.roomForm = {}
    await dispatch('closeDialog', {}, { root: true })
  },
  async closeRoom({ commit }, id) {
    try {
      await removeRetro(id)
    } catch (err) {
      throw err
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
