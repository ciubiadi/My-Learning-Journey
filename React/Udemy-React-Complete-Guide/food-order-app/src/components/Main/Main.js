import React from "react";
import styles from "./Main.module.css";
import mealsImage from "./../../assets/images/meals.jpg";
import Meals from "../Meals/Meals";

const Main = () => {
  return (
    <React.Fragment>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
      <section className={styles.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
      <Meals />
    </React.Fragment>
  );
};

export default Main;
