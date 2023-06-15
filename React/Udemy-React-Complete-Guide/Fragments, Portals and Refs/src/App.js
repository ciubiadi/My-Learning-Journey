import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import RefForm from "./components/RefForm";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    /* Another alternative for the Wrapper compoent is to use React.Fragment and in this way 
      no div will be used or showed in DOM. 
    */
    // <React.Fragment>
    <Fragment>
      <RefForm />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
    // </React.Fragment>
  );
}

export default App;
