import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles["main-content"]}>
      <div className={styles.image}>
        {/* <img src="/images/meals.jpg"></img> */}
      </div>
      <div className={styles["food-list"]}>
        <div className={styles["food-item"]}>
          <div className={styles["food-item-details"]}>
            <p>Food Name</p>
            <p>Food Description</p>
            <p>Food Price</p>
          </div>
          <div className={styles["food-item-action"]}>
            <div>
              <label>Amount</label>
              <input type="text" />
            </div>
            <div>
              <button>+Add</button>
            </div>
          </div>
        </div>
        <div className={styles["food-item"]}>
          <div className={styles["food-item-details"]}>
            <p>Food Name</p>
            <p>Food Description</p>
            <p>Food Price</p>
          </div>
          <div className={styles["food-item-action"]}>
            <div>
              <label>Amount</label>
              <input type="text" />
            </div>
            <div>
              <button>+Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
