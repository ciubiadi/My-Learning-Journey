/*
useCallback allows us to store a function across component execution. It allows us to tell React that I want ot save 
a function and this function should not be recreated with every component execution
*/
import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app is running");

  //Basically if I know that this function will never change, I can use useCallback to store it
  //useCallback allows me to save the function so I can reuse it.
  const toggleP = useCallback(() => {
    if (allowToggle) {
      // setShowP(!showP);
      setShowP((prevShowP) => !prevShowP);
    }
  }, [allowToggle]);

  const alowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    // The App component is rerendered when the button is clicked because the state is managed in the App omponent,
    // even if the change vissualy affects only the DemoOutput
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showP && <p>This is the p</p>} */}
      {/* pass false value to the show prop and see that the DemoOutput will not re-render with the memo method, but 
      if the state showP is passed trough prop, it will re-render because of the change. */}
      <DemoOutput show={showP} />
      <Button onClick={alowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleP}>Toggle P</Button>
    </div>
  );
}

export default App;
