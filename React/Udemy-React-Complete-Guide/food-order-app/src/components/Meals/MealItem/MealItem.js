import React from "react";
import styles from "./MealItem.module.css";
import Input from "../../UI/Input/Input";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <form className={styles.form}>
          <Input
            label="Amount"
            input={{
              type: "number",
              id: "amount_" + props.id,
              min: "1",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>Add to Cart</button>
        </form>
      </div>
    </li>
  );
};

export default MealItem;
