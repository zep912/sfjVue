import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getters from './getters'
import searchCache from './modules/searchCache'
const store = new Vuex.Store({
  modules: {
    searchCache
  },
  getters: getters
})
export default store