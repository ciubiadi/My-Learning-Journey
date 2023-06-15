import React, { useContext, useState } from "react";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
//styles
import "./App.css";
import Cart from "./components/Cart/Cart";

// import StateManagement from "./store/state-management";

function App() {
  const [modalCartVisible, setCartModalVisible] = useState(false);
  // const context = useContext(StateManagement);

  const openCartHandler = () => {
    setCartModalVisible(true);
  };

  const closeCartHandler = () => {
    setCartModalVisible(false);
  };

  return (
    <React.Fragment>
      {/* {context.modalVisible && <Cart />} */}
      {modalCartVisible && <Cart closeCartHandler={closeCartHandler} />}
      <Header openCartHandler={openCartHandler}></Header>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
