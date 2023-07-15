import { useReducer } from "react";

const initialInputState = {
  inputValue: "",
  isTouched: false,
};

const reducer = (inputState, action) => {
  if (action.type === "CHANGE_INPUT_VALUE") {
    return {
      ...inputState,
      inputValue: action.inputValue,
    };
  }
  if (action.type === "CHANGE_ISTOUCHED_VALUE") {
    return {
      ...inputState,
      isTouched: action.isTouched,
    };
  }
};

const useInputWithReducer = (validationFormula) => {
  const [inputState, dispatch] = useReducer(reducer, initialInputState);

  const inputIsValid = validationFormula(inputState.inputValue);
  const hasError = !inputIsValid && inputState.isTouched;

  const onChangeHandler = (event) => {
    dispatch({ type: "CHANGE_INPUT_VALUE", inputValue: event.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: "CHANGE_ISTOUCHED_VALUE", isTouched: true });
  };

  const reset = () => {
    dispatch({ type: "CHANGE_INPUT_VALUE", inputValue: "" });
    dispatch({ type: "CHANGE_ISTOUCHED_VALUE", isTouched: false });
  };

  return {
    inputValue: inputState.inputValue,
    inputIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInputWithReducer;
