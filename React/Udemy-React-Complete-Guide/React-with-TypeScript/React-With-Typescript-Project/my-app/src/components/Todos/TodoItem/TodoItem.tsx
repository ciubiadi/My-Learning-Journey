import React from "react";
import styles from "./TodoItem.module.css";
// import Todo from "../../models/Todo";

const TodoItem: React.FC<{ todoText: string }> = (props) => {
  return <li className={styles.item}>{props.todoText}</li>;
};

export default TodoItem;
