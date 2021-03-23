import React, { createContext, useReducer } from 'react';
import { Product } from '../models/shop';
import Reducer from './Reducer';

// Initial state
const initialState = {
  cartItems: [],
  deleteItem: (id: number) => { },
  addItem: (cartItem: Product) => { }
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Actions
  function deleteItem(id: Product['id']) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function addItem(cartItem: Product) {
    dispatch({
      type: 'ADD',
      payload: cartItem
    });
  }

  return (<GlobalContext.Provider value={{
    cartItems: state.cartItems,
    deleteItem,
    addItem
  }}>
    {children}
  </GlobalContext.Provider>);
}