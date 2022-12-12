// Dependency
import axios from 'axios';
import React, { useContext, useReducer, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Reducers
import cartReducer, {initialState} from '../Reducers/cartReducer';
// Components
import ShoppingCart from '../../Pages/ShoppingCart';
import { IProduct } from '../Models/IProduct';


interface ShoppingCartProviderProps {
  children: any;
}


interface CartState {
  cart: any;
  userInfo?: any;
}

interface ActionType {
  type: string;
  payload?: any;
}

export interface IShoppingCartContext {   
  openCart: () => void;
  closeCart: () => void;
  state: CartState;
  dispatch: React.Dispatch<ActionType>;
  addToCartHandler: (product: any) => void
  updateCartHandler: (item: any, quantity: any) => void;
  removeItemHandler: (item: any) => void;
  checkOutHandler: () => void;
};

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};


function reducer(state: CartState, action: ActionType) {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };

    case 'USER_SIGNOUT':
      return {
        ...state,
        userInfo: null,
      };

    default:
      return state;
  }
}

const ShoppingContextProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const navigate = useNavigate();

  // using the reducer here
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Adds products to cart
  // finds product based o  id and adds it to cart
  // if the product allready is in the cart it only increases the quantity
  // it will only increace the quantity to the instock amount.
  const { dispatch: ctxDispatch } = useShoppingCartContext();

  const addToCartHandler = async (product: any) => {
    const controllItem = state.cart.cartItems.find((x: any) => x._id === product._id);
    const quantity = controllItem ? controllItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry this Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });

  }
 




  // updates cart items
  const updateCartHandler = async (item: any, quantity: any) => {
    const { data } = await axios.get(`/api/products/${item._id}`);

    if (data.countInStock < quantity) {
      window.alert('Sorry this Product is out of stock');
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  // removes product from item
  const removeItemHandler = (item: any) => {
    dispatch({
      type: 'REMOVE_CART_ITEM',
      payload: item,
    });
  };

  // Checkout Handler
  const checkOutHandler = () => {
    navigate('signin?redirect=/shipping');
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        state,
        dispatch,
        closeCart,
        openCart,
        addToCartHandler,
        updateCartHandler,
        removeItemHandler,
        checkOutHandler,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingContextProvider;
