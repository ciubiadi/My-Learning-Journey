import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosCtxObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosCtxObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: Element[] }> = (
  props: any
) => {
  const [todosState, setTodosState] = useState<Todo[]>([]);

  const addTodoHandler = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);

    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
      // return prevTodos.concat(newTodo);
    });
  };

  const onRemoveTodo = (id: string) => {
    setTodosState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextVal: TodosCtxObj = {
    items: todosState,
    addTodo: addTodoHandler,
    removeTodo: onRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextVal}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
