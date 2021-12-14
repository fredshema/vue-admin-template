export default {
  namespaced: true,
  state: () => ({
    data: null,
  }),
  mutations: {
    mutateGuestData(state, param) {
      state.data = param;
    },
  },
  actions: {
    setGuestData(ctx, payload) {
      ctx.commit("mutateGuestData", payload);
    },
  },
  getters: {},
};
