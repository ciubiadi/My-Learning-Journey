import React, { useReducer } from "react";
import CartContext from "./cart-context";

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

const cartReducer = (state, action) => {
  console.log(state.totalAmount);
  console.log(action.item);
  console.log(state.items);
  switch (action.type) {
    case ACTIONS.ADD:
      const updatedItems = state.items.concat(action.item);
      const newTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    // return {
    //   items: [...state.items],
    //   totalAmount: state.totalAmount + 1,
    // };
    case ACTIONS.REMOVE:
      return {
        ...state,
        totalAmount: state.totalAmount - 1,
      };
    default:
      return state;
  }
};

const CartContextProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: ACTIONS.ADD, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: ACTIONS.REMOVE, id: id });
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
