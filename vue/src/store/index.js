import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mode_selected:
      localStorage.getItem("mode") === undefined
        ? false
        : localStorage.getItem("mode") === "true",
  },
  getters: {
    mode_selected(state) {
      return state.mode_selected;
    },
  },
  mutations: {
    CHANGE_MODE(state) {
      state.mode_selected = !state.mode_selected;
      localStorage.setItem("mode", state.mode_selected);
    },
  },
  actions: {
    change_mode({ commit }) {
      commit("CHANGE_MODE");
    },
  },
});
