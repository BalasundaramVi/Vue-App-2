import { firebaseAction } from 'vuexfire';

const state = {
  orders: [],
};

const getters = {
  getOrders: state => state.orders,
  numberOfOrders: state => state.orders.length,
};

const mutations = {
  addOrder: (state, order) => state.orders.push(order),
};

const actions = {
  setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    // this will unbind any previously bound ref to 'todos'
    bindFirebaseRef('orders', ref);
  }),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
