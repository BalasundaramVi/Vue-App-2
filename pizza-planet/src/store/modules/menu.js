import { firebaseAction } from 'vuexfire';

const state = {
  menuItems: [],
};

const getters = {
  getMenuItems: state => state.menuItems,

};

const actions = {
  setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    // this will unbind any previously bound ref to 'todos'
    bindFirebaseRef('menuItems', ref);
  }),
};

export default {
  state,
  getters,
  actions,
};
