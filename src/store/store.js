import Vue from 'vue'
import Vuex from 'vuex'
import * as fixedstations from '@/store/modules/fixedstations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fixedstations
  }
})
