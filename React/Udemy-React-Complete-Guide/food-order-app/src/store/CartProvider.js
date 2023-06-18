import React, { useReducer } from "react";
import CartContext from "./cart-context";

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      //find index of item already existing in the cart
      const itemAlreadyInCart = state.items.findIndex(
        (elem) => elem.id === action.item.id
      );

      let updatedItems = state.items;
      //item already added to the cart so I need to update the amount
      if (itemAlreadyInCart != -1) {
        //update just the amount of that item
        state.items[itemAlreadyInCart].amount += action.item.amount;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      const newTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

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
    // const test = cartState.items.find((elem) => elem.name === item.name);
    // console.log("cartState");
    // console.log(cartState);
    // console.log("test");
    // console.log(test);
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
