// import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/Todos/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
    // <div>
    //   {/* <NewTodo onAddTodo={addTodoHandler} />
    //   <Todos items={todosState} onRemoveTodo={onRemoveTodo} /> */}
    // </div>
  );
}

export default App;
