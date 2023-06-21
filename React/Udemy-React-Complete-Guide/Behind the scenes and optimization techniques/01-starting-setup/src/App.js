import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("app is running");

  const toggleP = () => {
    // setShowP(!showP);
    setShowP((prevShowP) => !prevShowP);
  };

  return (
    // The App component is rerendered when the button is clicked because the state is managed in the App omponent,
    // even if the change vissualy affects only the DemoOutput
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showP && <p>This is the p</p>} */}
      {/* pass false value to the show prop and see that the DemoOutput will not re-render with the memo method, but 
      if the state showP is passed trough prop, it will re-render because of the change. */}
      <DemoOutput show={false} />
      <Button onClick={toggleP}>Toggle P</Button>
    </div>
  );
}

export default App;

/*


*/
