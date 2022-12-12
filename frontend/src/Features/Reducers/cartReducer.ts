export const initialState = {
  cart: {
    cartItems: [],
  },
};

interface CartState {
  cart: any;
}

interface ActionType {
  type: string;
  payload?: any;
}

const cartReducer = (state: CartState, action: ActionType) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const controllItem = state.cart.cartItems.find(
        (item: any) => item._id === newItem._id
      );

      const cartItems = controllItem
        ? state.cart.cartItems.map((item: any) =>
            item._id === controllItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };

    case 'REMOVE_CART_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item: any) => item._id !== action.payload._id
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};
export default cartReducer;
