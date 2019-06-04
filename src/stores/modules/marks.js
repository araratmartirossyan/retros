import firebase from 'firebase'

const state = {
  marks: [],
  markForm: {}
}

const getters = {
  marks: () => {
    const marks = firebase.database().ref('marks')
    marks.on('value', (snapshot) => { state.marks = snapshot.val() })
    return state.marks
  }
}

const mutations = {
}

const actions = {
  pushMark() {
    const marks = firebase.database().ref('marks')
    marks.push({
      title: 'Hello',
      type: 'Bad'
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
