import { useState, useEffect } from "react";

const useCounter = (counterOperator = "add") => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counterOperator === "increase") {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (counterOperator === "decrease") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counterOperator]);

  return counter;
};

export default useCounter;
