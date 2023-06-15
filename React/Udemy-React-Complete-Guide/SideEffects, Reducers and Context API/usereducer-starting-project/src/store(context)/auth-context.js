import React from "react";

//create a Context object
// This will be an object that also contains components
//In React.createContext we pass the default context
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
