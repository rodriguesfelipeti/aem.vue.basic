export default {
  namespaced: true,
  state: {
    loggedData: {
      logged: false,
      loggedUser: ''
    },
    errorData: {
      errorUser: false,
      errorPass: false,
      errorMsg: ''
    },
    teste: null
  },
  getters: {
    getErrorData (state) {
      return state.errorData
    },
    getLogged (state) {
      return state.loggedData
    }
  },
  mutations: {
    setErrorData (state, error) {
      state.errorData = error
    },
    setLoggedData (state, user) {
      state.loggedData.logged = true
      state.loggedData.loggedUser = user.user
    }
  },
  actions: {
    setErrorDataAction (context, error) {
      context.commit('setErrorData', error)
    },
    setLogged (context, user) {
      context.commit('setLoggedData', user)
    }
  }
}
