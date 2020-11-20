export const namespaced = true

export const state = {
  authorized: '',
  listStations: [],
  dataApi: [],
  count: 0
}

export const actions = {
  increment: async ({ commit }) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('INCREMENT')
  },
  getDataApi: async ({ commit }, { http, url }) => {
    const { data } = await http.get(url)
    commit('GET_DATA_API', data) //JSON.stringify(data, null, 2))
  }
}

export const mutations = {
  CHECK_AUTH(state, payload) {
    state.authorized = payload
  },
  GET_DATA_API(state, payload) {
    state.dataApi.push(payload)
  },
  INCREMENT: state => {
    ++state.count
  }
}
