const getMenuItems = state => state.menuItems;

const numberOfOrders = state => state.orders.length;

const currentUser = state => state.currentUser;

export { getMenuItems, numberOfOrders, currentUser };
