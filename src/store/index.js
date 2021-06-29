// import { now, date2string } from '@/utils/date.js'
import axios from "@/plugins/axios"
import createPersistedState from "vuex-persistedstate"

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userAnalyzeResults: {},
  userAnalyzeQueue: {},
}

const actions = {
  async setUserAnalyzeResults ({ commit }) {
    const results_data = await axios.get('/results')
    commit('setUserAnalyzeResults', results_data.data)
  },
  async setUserAnalyzeQueue ({ commit }) {
    const requests_data = await axios.get('/requests')
    commit('setUserAnalyzeQueue', requests_data.data)
  }
}

const mutations = {
  setUserAnalyzeResults(state, payload) {
    state.userAnalyzeResults = payload
  },
  setUserAnalyzeQueue(state, payload) {
    state.userAnalyzeQueue = payload
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [createPersistedState()]
  })
}

export default store
