const setUser = ({ commit }, user) => {
  commit('userStatus', user);
};

export default setUser;
