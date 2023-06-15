import React from "react";
import styles from "./Header.module.css";

import CartIcon from "../Cart/CartIcon";

const Header = (props) => {
  const toggleModalHandler = () => {};

  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <button className={styles.button} onClick={toggleModalHandler}>
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
