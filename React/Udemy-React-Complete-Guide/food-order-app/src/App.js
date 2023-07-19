import React, { useState } from "react";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
//styles
import "./App.css";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CartProvider";

// import StateManagement from "./store/state-management";
// https://console.firebase.google.com/u/0/project/food-order-app-5060a/database/food-order-app-5060a-default-rtdb/data (link for backend)
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
    <CardProvider>
      {/* {context.modalVisible && <Cart />} */}
      {modalCartVisible && <Cart closeCartHandler={closeCartHandler} />}
      <Header openCartHandler={openCartHandler}></Header>
      <Main></Main>
    </CardProvider>
  );
}

export default App;
