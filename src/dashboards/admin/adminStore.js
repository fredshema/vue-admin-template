export default {
  namespaced: true,
  state: () => ({
    data: null,
  }),
  mutations: {
    mutateAdminData(state, param) {
      state.data = param;
    },
  },
  actions: {
    setAdminData(ctx, payload) {
      ctx.commit("mutateAdminData", payload);
    },
  },
  getters: {},
};
