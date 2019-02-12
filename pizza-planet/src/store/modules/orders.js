const state = {
  orders: [],
};

const getters = {
  addOrder: (state, order) => state.orders.push(order),
  numberOfOrders: state => state.orders.length,
};

export default {
  state,
  getters,
};
