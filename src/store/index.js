import Vue from 'vue'
import Vuex from 'vuex'
import * as utility from '../utility'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    error: null,
    loading: false,
    calculateBmr: null
  },

  mutations: {
    setErorr(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setCalculatedBmr (state, payload) {
      state.calculateBmr = payload;
    }
  },

  actions: {
    calculateBmr({ commit }, payload) {
      commit('setLoading', true);
      commit('setErorr', null);
      commit('setCalculatedBmr', null);

      let bmr = utility.bmrCalculator(payload);

      commit('setCalculatedBmr', bmr);
      commit('setLoading', false);

    }
  },

  getters: {
    error (state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    },
    bmr (state) {
      return state.calculateBmr;
    }
  }
})