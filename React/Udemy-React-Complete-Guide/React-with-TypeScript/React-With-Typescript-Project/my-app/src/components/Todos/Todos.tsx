import React from "react";
import Todo from "../../models/Todo";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./Todos.module.css";
/* this FC type it makes clear that this function acts like a funtional component */
/* With the {} inside the <>(generic types syntax) I am using a generic type already created. With the {} I unlock a 
feature built into FC type. Basically I merged my own prop definition (the items property) with the base prop (children)
*/
const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
