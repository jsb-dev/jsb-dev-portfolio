import { createStore } from 'vuex';

export default createStore({
  state: {
    viewportIsVertical: window.innerWidth < window.innerHeight,
    viewportIsPortable:
      (window.innerWidth < window.innerHeight && window.innerWidth < 800) ||
      (window.innerWidth >= window.innerHeight && window.innerWidth < 1800),
  },
  mutations: {
    updateLayout(state) {
      state.viewportIsVertical = window.innerWidth < window.innerHeight;
      state.viewportIsPortable =
        (state.viewportIsVertical && window.innerWidth < 800) ||
        (!state.viewportIsVertical && window.innerWidth < 1800);
    },
  },
  actions: {
    updateLayout(context) {
      context.commit('updateLayout');
    },
  },
});
