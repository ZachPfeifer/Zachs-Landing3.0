import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index.js'



Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    messages: [],
    ActiveMessage: {}
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload
    },
    setActiveMessage(state, payload) {
      state.ActiveMessage = payload
    }
  },
  actions: {
    async getMessages({ commit, dispatch }) {
      try {
        let res = await api.get('messages')
        commit('setMessages', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getMessageById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/messages/${payload}`)
        commit('setActiveMessage', res.data)
        router.push({ name: "messages" })
      } catch (error) {
        console.error(error)

      }
    },

    async createMesage({ dispatch }, payload) {
      try {
        let res = await api.post('messages', payload)
        dispatch('getMessages')
        console.log(payload)
      } catch (error) {
        console.error(error.Message)
      }
    },

  },
  modules: {
  }
})
