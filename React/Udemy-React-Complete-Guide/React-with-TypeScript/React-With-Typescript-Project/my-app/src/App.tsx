import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/Todos/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import Todo from "./models/Todo";

function App() {
  const [todosState, setTodosState] = useState<Todo[]>([
    new Todo("Learn TS"),
    new Todo("Learn React"),
  ]);
  // const todos = [new Todo("Learn TS"), new Todo("Learn React")];

  const addTodoHandler = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);
    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
      // return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todosState} />
    </div>
  );
}

export default App;
