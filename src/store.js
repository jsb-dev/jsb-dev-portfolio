import { createStore } from 'vuex';

export default createStore({
  state: {
    viewportIsVertical: window.innerWidth < window.innerHeight,
    viewportIsPortable:
      (window.innerWidth < window.innerHeight && window.innerWidth < 600) ||
      (window.innerWidth >= window.innerHeight && window.innerWidth < 950),
  },
  mutations: {
    updateLayout(state) {
      state.viewportIsVertical = window.innerWidth < window.innerHeight;
      state.viewportIsPortable =
        (state.viewportIsVertical && window.innerWidth < 600) ||
        (!state.viewportIsVertical && window.innerWidth < 950);
    },
  },
  actions: {
    updateLayout(context) {
      context.commit('updateLayout');
    },
  },
});
