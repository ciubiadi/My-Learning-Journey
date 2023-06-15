import React, { useState } from "react";

const StateManagement = React.createContext({
  modalVisible: false,
});

export const StateContextProvider = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openCart = () => {
    console.log("open cart");
    setModalVisible(true);
  };

  const closeCart = () => {
    console.log("close cart");
    setModalVisible(false);
  };

  return (
    <StateManagement.Provider
      value={{
        modalVisible: modalVisible,
        openCart: openCart,
        closeCart: closeCart,
      }}
    >
      {props.children}
    </StateManagement.Provider>
  );
};

export default StateManagement;
