import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";

import CartContext from "../../store/cart-context";
// import StateManagement from "../../store/state-management";
import CartIcon from "../Cart/CartIcon";

const Header = (props) => {
  const [cartBtnHighlighted, setCartBtnHighlighted] = useState(false);

  // const context = useContext(StateManagement);
  const cartContext = useContext(CartContext);

  //  calculate not just the items, but their amounts as well
  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${
    cartBtnHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    // I should have at least 1 item in the cart
    if (cartContext.items.length === 0) {
      return;
    }
    setCartBtnHighlighted(true);

    const timer = setTimeout(() => {
      setCartBtnHighlighted(false);
    }, 300);

    //clean up timer
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      {/* <button className={styles.button} onClick={context.openCart}> */}
      <button className={btnClasses} onClick={props.openCartHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
    </header>
  );
};

export default Header;
