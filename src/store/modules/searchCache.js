const searchCache = {
  state: {
    cache: {}
  },
  mutations: {
    SET_SEARCH_CACHE: (state, cache) => {
      state.cache[cache.name] = cache.request
    }
  },
  actions: {
    setCache({ commit }, cache) {
      commit('SET_SEARCH_CACHE', cache)
    }
  }
}

export default searchCache
