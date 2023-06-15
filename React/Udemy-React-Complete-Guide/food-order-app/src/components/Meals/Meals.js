import React from "react";
import styles from "./Meals.module.css";
import { DUMMY_MEALS } from "../../assets/utils/dummy-meals";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const Meals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Meals;
