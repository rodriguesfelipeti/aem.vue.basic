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
      if (localStorage.getItem('logged')) {
        state.loggedData.logged = localStorage.getItem('logged')
        state.loggedData.loggedUser = localStorage.getItem('loggedUser')
      }

      return state.loggedData
    }
  },
  mutations: {
    setErrorData (state, error) {
      state.errorData = error
    },
    setLoggedData (state, user) {
      localStorage.setItem('logged', true)
      localStorage.setItem('loggedUser', user.user)

      state.loggedData.logged = true
      state.loggedData.loggedUser = user.user
    },
    destroyLoggedData (state) {
      localStorage.setItem('logged', false)
      localStorage.setItem('loggedUser', '')
      state.loggedData.loggedUser = ''
      state.loggedData.logged = false
    }
  },
  actions: {
    setErrorDataAction (context, error) {
      context.commit('setErrorData', error)
    },
    setLogged (context, user) {
      context.commit('setLoggedData', user)
    },
    destroyLogged (context) {
      context.commit('destroyLoggedData')
    }
  }
}
