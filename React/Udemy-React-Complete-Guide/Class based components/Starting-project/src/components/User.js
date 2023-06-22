import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    // we can access props trough this because of the class Component we extend
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
