import { useState } from "react";

const useInputAgainFromScratch = (validationFormula) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validationFormula(inputValue);
  const hasError = !inputIsValid && inputIsTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputIsTouched(false);
    setInputValue("");
  };

  return {
    inputValue,
    inputIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInputAgainFromScratch;
