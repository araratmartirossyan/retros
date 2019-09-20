import { getMarks } from '@retros/firebase-adapter'
import router from '../../router'

const state = {
  marks: [],
  markForm: {
    text: ''
  },
  retroId: ''
}

const getters = {
  marks: () => {
    const marks = getMarks(state.retroId)
    marks.on('value', (snapshot) => {
      state.marks = snapshot.val()
    })
    return state.marks
  }
}

const mutations = {
  setRetroId() {
    const { params: { id } } = router.currentRoute
    state.retroId = id
  },
  updateMarkForm(_, { key, value }) {
    state.markForm[key] = value
  },
  clearState() {
    state.markForm = {
      text: ''
    }
  }
}

const actions = {
  async pushMark({ rootState: { login }, commit }) {
    const { userProfile: { photoURL, displayName } } = login
    const { params: { type } } = router.currentRoute
    const marks = getMarks(state.retroId)
    await marks.push({
      ...state.markForm,
      type,
      userAvatar: photoURL,
      userName: displayName,
      id: state.retroId
    })
    await router.replace(`/retros/${state.retroId}`)
    await commit('clearState')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
