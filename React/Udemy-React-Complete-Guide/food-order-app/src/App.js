import React from "react";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
//styles
import "./App.css";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header></Header>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
