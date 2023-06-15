import React from "react";
import styles from "./Main.module.css";
import mealsImage from "./../../assets/meals.jpg";

const Main = () => {
  return (
    <React.Fragment>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </React.Fragment>
  );
};

export default Main;
