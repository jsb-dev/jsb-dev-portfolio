import { createStore } from 'vuex';

export default createStore({
  state: {
    viewportOrientation:
      window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical',
    viewportIsPortable: false,
  },
  mutations: {
    setViewportOrientation(state) {
      state.viewportOrientation =
        window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical';
    },
    setViewportIsPortable(state, orientation) {
      state.viewportIsPortable =
        window.innerWidth < 800 && orientation === 'horizontal';
    },
  },
  actions: {
    updateViewport({ commit, state }) {
      commit('setViewportOrientation');
      commit('setViewportIsPortable', state.viewportOrientation);
    },
  },
  getters: {
    isPortable: (state) => state.viewportIsPortable,
    orientation: (state) => state.viewportOrientation,
  },
});
