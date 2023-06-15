import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

import StateManagement from "../../store/state-management";

const Cart = (props) => {
  // const ctx = useContext(StateManagement);
  const closeCartModalHandler = () => {
    props.closeCartHandler();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: "2", price: "12.99" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        {/* <button className={styles["button--alt"]} onClick={ctx.closeCart}> */}
        <button
          className={styles["button--alt"]}
          onClick={closeCartModalHandler}
        >
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
