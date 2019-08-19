const state = {
  isMenuOpen: false,
  modalName: ''
}

const getters = {
  isMenuOpen: () => state.isMenuOpen,
  modalName: () => state.modalName
}

const mutations = {
  openMenu(_, modalName) {
    state.isMenuOpen = !state.isMenuOpen
    state.modalName = modalName
  }
}

export default {
  state,
  mutations,
  getters
}
