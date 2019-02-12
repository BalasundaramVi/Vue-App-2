const state = {
  currentUser: null,
};

const getters = {
  currentUser: state => state.currentUser,
};

const mutations = {
  userStatus(state, user) {
    if (user) {
      Object.assign(state, { currentUser: user.email });
    } else {
      Object.assign(state, { currentUser: null });
    }
  },
};

const actions = {
  setUser({ commit }, user) {
    commit('userStatus', user);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
