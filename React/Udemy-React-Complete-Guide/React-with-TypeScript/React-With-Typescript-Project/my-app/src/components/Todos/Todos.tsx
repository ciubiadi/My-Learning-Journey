import React from "react";

/* this FC type it makes clear that this function acts like a funtional component */
/* With the {} inside the <>(generic types syntax) I am using a generic type already created. With the {} I unlock a 
feature built into FC type. Basically I merged my own prop definition (the items property) with the base prop (children)
*/
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
