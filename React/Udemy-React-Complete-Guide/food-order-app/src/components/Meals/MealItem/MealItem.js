import React, { useState, useContext, useRef } from "react";
import styles from "./MealItem.module.css";
import Input from "../../UI/Input/Input";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  const [amountIsValid, setAmountIsValid] = useState(true);

  const cartContext = useContext(CartContext);

  const amountInput = useRef();

  const submitAddItemForm = (e) => {
    e.preventDefault();
    const amount = amountInput.current.value;
    const amountNumber = +amount;

    if (amount.trim().length === 0 || amountNumber < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }

    cartContext.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amountNumber,
      price: props.meal.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <form className={styles.form} onSubmit={submitAddItemForm}>
          <Input
            label="Amount"
            ref={amountInput}
            input={{
              type: "number",
              id: "amount_" + props.id,
              min: "1",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>Add to Cart</button>
          {!amountIsValid && <p>Please enter a valid amount between 1 and 5</p>}
        </form>
      </div>
    </li>
  );
};

export default MealItem;
