import React, { useState } from "react";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("app is running");

  const toggleP = () => {
    // setShowP(!showP);
    setShowP((prevShowP) => !prevShowP);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showP && <p>This is the p</p>}
      <button onClick={toggleP}>Toggle P</button>
    </div>
  );
}

export default App;
