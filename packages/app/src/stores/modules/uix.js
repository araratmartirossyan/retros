const state = {
  isMenuOpen: false,
  modalName: ''
}

const getters = {
  isMenuOpen: () => state.isMenuOpen,
  modalName: () => state.modalName
}

const mutations = {
  openMenu(_, modalName = '') {
    state.isMenuOpen = !state.isMenuOpen
    state.modalName = modalName
  },
  toggleDialog() {
    state.isMenuOpen = !state.isMenuOpen
  },
  forceCloseDialog() {
    state.isMenuOpen = false
  }
}

const actions = {
  closeDialog({ commit }) {
    commit('toggleDialog')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
