import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.brand}>ReactMeals</div>
        <div className={styles["cart-container"]}>
          <div className={styles["cart-text"]}>Your Cart</div>
          <div className={styles["cart-items-number"]}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
