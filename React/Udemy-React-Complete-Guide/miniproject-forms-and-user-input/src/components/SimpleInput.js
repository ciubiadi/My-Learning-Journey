// import { useState } from "react";
// import { useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueInputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetForm: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  // const [name, setName] = useState("");
  // const [nameIsTouched, setNameIsTouched] = useState(false);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueInputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetForm: resetEmailInput,
  } = useInput((value) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );

  // const [emailInput, setEmailInput] = useState("");
  // const [emailIsTouched, setEmailIsTouched] = useState(false);

  // const nameIsValid = name.trim() !== "";
  // const emailIsValid =
  //   emailInput.trim() !== "" &&
  //   emailInput.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  // const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  // const emailInputIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEmailInput(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setNameIsTouched(true);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEmailIsTouched(true);
  // };

  const formSubmitHabdler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();

    // setNameIsTouched(true);
    // setEmailInput("");
    // setEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // setName("");
    // setEmailInput("");
    // setNameIsTouched(false);
    // setEmailIsTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHabdler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">
            Email must not be empty and must be valid
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
