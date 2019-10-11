import {
  addRetro,
  getActiveRetros,
  getFinishedRetros,
  removeRetro,
  getRoom,
  updateRoom
} from '@retros/firebase-adapter'
import { omit } from 'ramda'
import { prepareDate, convertTime } from '@/utils/retroUtils'

const state = {
  activeRetros: [],
  finishedRetros: [],
  retroForm: {},
  roomForm: {
    title: '',
    date: new Date(),
    isEdit: false,
    status: 'active'
  },
  room: {}
}

const getters = {
  activeRetros: () => {
    const marks = getActiveRetros()
    marks.on('value', (snapshot) => {
      state.activeRetros = snapshot.val()
    })
    return state.activeRetros
  },
  finishedRetros: () => {
    const marks = getFinishedRetros()
    marks.on('value', (snapshot) => {
      state.finishedRetros = snapshot.val()
    })
    return state.finishedRetros
  },
  getRoom: () => state.roomForm,
  roomDescription: () => state.room
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
  },
  setRoomDescription(_, room) {
    state.room = room
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
  async getRoomDescription({ commit }, id) {
    try {
      const room = await getRoom(id)
      await commit('setRoomDescription', {
        ...room,
        id
      })
    } catch (err) {
      console.warn('get room failed', err)
    }
  },
  async updateRoom({ dispatch }) {
    const { id, date, time } = state.roomForm
    const clearedForm = omit(['id', 'isEdit'], state.roomForm)
    const convertedDate = prepareDate(date)
    try {
      await updateRoom(id, {
        ...clearedForm,
        ...convertedDate,
        time: convertTime(time)
      })
      state.roomForm = {}
      await dispatch('closeDialog', {}, { root: true })
    } catch (err) {
      console.warn(err)
    }
  },
  async createRoom({ dispatch }) {
    const { date, time } = state.roomForm
    const convertedDate = prepareDate(date)
    await addRetro({
      ...state.roomForm,
      ...convertedDate,
      time: convertTime(time)
    })
    state.roomForm = {}
    await dispatch('closeDialog', {}, { root: true })
  },
  async closeRoom(id) {
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
