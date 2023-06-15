import React, { useContext } from "react";
import styles from "./Header.module.css";

import StateManagement from "../../store/state-management";
import CartIcon from "../Cart/CartIcon";

const Header = (props) => {
  const context = useContext(StateManagement);

  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <button className={styles.button} onClick={context.openCart}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>4</span>
      </button>
    </header>
  );
};

export default Header;
