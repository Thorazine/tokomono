import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * Development switch.
     * Removes all the gates from the router
     * If set to true, all vue routes can be navigated to.
     */
    development: false,
    alerts: [],
    count: 0
  },
  mutations: {
    // SET_TRANSITION(state, transition){
    //  state.transition = transition
    // },
    // SET_ALERT: function (state, alerts) {
    //   state.alerts = alerts
    // },
    increment: (state) => {
      state.count++
    },
    decrement: (state) => state.count--
  },
  actions: {

  },
  mounted: function () {

  }
})
