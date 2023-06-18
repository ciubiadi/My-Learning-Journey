import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
//components
import CartItem from "./CartItem/CartItem";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const cartHasItems = ctx.items.length > 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem key={item.id} item={item}>
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal closeCartHandler={props.closeCartHandler}>
      {cartHasItems ? cartItems : <p>No items in the cart</p>}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        {/* <button className={styles["button--alt"]} onClick={ctx.closeCart}> */}
        <button
          className={styles["button--alt"]}
          onClick={props.closeCartHandler}
        >
          Close
        </button>
        {cartHasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
