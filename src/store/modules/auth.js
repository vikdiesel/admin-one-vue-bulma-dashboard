import { setToken, setRefreshToken, decodeToken, removeToken, removeRefreshToken } from '@/utils/cookies'
import { login } from '@/api/auth'

const state = {
  isLogued: false,
  user: {}
}

const mutations = {
  SET_LOGIN (state, value) {
    state.isLogued = value
  },
  SET_USER (state, value) {
    state.user = value
  }
}
const actions = {
  login ({ commit }, data) {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      try {
        const res = await login(data)
        const token = res.access
        const decoded = decodeToken(token)
        setToken(res.access)
        setRefreshToken(res.refresh)
        commit('SET_LOGIN', true)
        resolve(decoded)
      } catch (error) {
        reject(error)
      }
    })
  },
  // user logout
  logout () {
    return new Promise((resolve, reject) => {
      removeToken()
      removeRefreshToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
