import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../../../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    /* ? : I will use it when I am not sure if the value will be null but "!" will be used only when I'm sure that
     newTodoText will never have a null value assigned here. Basically with "?" I will always say "Try to get me the 
     value and if it's null, store null in the constant" but with '1' I will say "I'm sure that here I will not be 
     dealing with null so there fore get me the value from that property. "
     */
    const newTodoText = todoTextInputRef.current!.value;

    if (newTodoText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(newTodoText);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <label htmlFor="todoText">Todo text</label>
      <input type="text" id="todoText" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
