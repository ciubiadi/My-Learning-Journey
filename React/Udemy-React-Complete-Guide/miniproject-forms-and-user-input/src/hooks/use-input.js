import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetForm = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  //I can return anything
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueInputChangeHandler,
    inputBlurHandler,
    resetForm,
  };
};

export default useInput;
