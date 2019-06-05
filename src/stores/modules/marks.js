import firebase from 'firebase'
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
    const marks = firebase.database().ref(`marks/${state.retroId}`)
    marks.on('value', (snapshot) => { state.marks = snapshot.val() })
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
  }
}

const actions = {
  pushMark({ rootState: { login } }, type) {
    const { userProfile: { photoURL, displayName } } = login
    const marks = firebase.database().ref(`${type}/${state.retroId}`)
    marks.push({
      ...state.markForm,
      type,
      userAvatar: photoURL,
      userName: displayName,
      id: state.retroId
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
