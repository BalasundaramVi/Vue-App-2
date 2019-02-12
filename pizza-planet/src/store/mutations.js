const addOrder = (state, order) => state.orders.push(order);

const userStatus = (state, user) => {
  if (user) {
    Object.assign(state, { currentUser: user.email });
  } else {
    Object.assign(state, { currentUser: null });
  }
};

export { addOrder, userStatus };
