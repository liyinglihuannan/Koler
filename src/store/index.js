import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import login from './modules/login'
import questionBank from './modules/questionBank'
import navRight from './modules/navRight'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    login,
    questionBank,
    navRight
  }
})