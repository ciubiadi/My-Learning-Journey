import React, { useContext } from "react";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
//styles
import "./App.css";
import Cart from "./components/Cart/Cart";

import StateManagement from "./store/state-management";

function App() {
  const context = useContext(StateManagement);
  return (
    <React.Fragment>
      {context.modalVisible && <Cart />}
      <Header></Header>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
