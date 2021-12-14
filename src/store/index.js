import Vue from "vue";
import Vuex from "vuex";

import admin from "../dashboards/admin/adminStore";
import guest from "../dashboards/guest/guestStore";

const initialState = {
  cancelTokens: [],
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: initialState,
  mutations: {
    ADD_CANCEL_TOKEN(state, token) {
      state.cancelTokens.push(token);
    },
    CLEAR_CANCEL_TOKENS(state) {
      if (state.cancelTokens.length < 1) return;
      state.cancelTokens = [];
    },
    CLEAR_DATA(state) {
      state = initialState;
    },
  },
  actions: {
    CANCEL_PENDING_REQUESTS(context) {
      context.state.cancelTokens.forEach((request, i) => {
        if (request.cancel) {
          request.cancel();
        }
      });
      context.commit("CLEAR_CANCEL_TOKENS");
    },
    CLEAR_DATA(context) {
      context.commit("CLEAR_DATA");
    },
  },
  getters: {
    cancelTokens(state) {
      return state.cancelTokens;
    },
  },
  modules: { admin, guest },
});
