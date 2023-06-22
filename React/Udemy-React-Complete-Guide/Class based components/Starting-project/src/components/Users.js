import { Component } from "react";
// import { useState } from "react";
import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  // to define state in class based component I use constructor
  // [showUsers, setShowUsers] = useState(true);
  // This construcot is automatically called whenever the class is instantiated
  constructor() {
    super();
    // In Class based components the state is ALWAYS stored in a object
    // So the state is always an object and it also has to be a property named "state"
    // In other words, I need to store togheter in a object all state pieces
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    // try {
    // } catch (err) {}

    if (this.props.users.length === 0) {
      throw new Error("No users provioded!");
    }
  }

  toggleUsersHandler() {
    // setShowUsers((curState) => !curState);
    // this.state.showUsers = false    ---- this is NOT the correct way to modidfy the state

    //The corect way to modify the state is the below one
    // this.setState({
    //   showUsers: false,
    // });

    this.setState((curState) => {
      return {
        showusers: !curState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
