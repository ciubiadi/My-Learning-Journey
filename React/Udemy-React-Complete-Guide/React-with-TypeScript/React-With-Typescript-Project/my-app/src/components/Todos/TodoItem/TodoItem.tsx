import React from "react";
import styles from "./TodoItem.module.css";
// import Todo from "../../models/Todo";

const TodoItem: React.FC<{
  todoText: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTodo}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
