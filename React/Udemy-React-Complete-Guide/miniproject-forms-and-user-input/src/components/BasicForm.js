import useInputAgainFromScratch from "../hooks/use-input-again-from-scratch";
import Input from "./UI/Input";

const BasicForm = (props) => {
  const {
    inputValue: firstNameInputValue,
    inputIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    onChangeHandler: onChangeFirstName,
    onBlurHandler: onBlurFirstName,
    reset: resetFirstName,
  } = useInputAgainFromScratch((value) => value.trim() !== "");

  const {
    inputValue: lastNameInputValue,
    inputIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    onChangeHandler: onChangeLasttName,
    onBlurHandler: onBlurLastName,
    reset: resetLastName,
  } = useInputAgainFromScratch((value) => value.trim() !== "");

  const {
    inputValue: emailInputValue,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: onChangeEmail,
    onBlurHandler: onBlurEmail,
    reset: resetEmail,
  } = useInputAgainFromScratch((value) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <Input
          onChangeHandler={onChangeFirstName}
          onBlurHandler={onBlurFirstName}
          inputValue={firstNameInputValue}
          isValid={!firstNameHasError}
          type="text"
          name="first_name"
          id="first_name"
          label="First Name"
        />
        <Input
          onChangeHandler={onChangeLasttName}
          onBlurHandler={onBlurLastName}
          inputValue={lastNameInputValue}
          isValid={!lastNameHasError}
          type="text"
          name="last_name"
          id="last_name"
          label="Last Name"
        />
      </div>
      <Input
        onChangeHandler={onChangeEmail}
        onBlurHandler={onBlurEmail}
        inputValue={emailInputValue}
        isValid={!emailHasError}
        type="email"
        name="email"
        id="email"
        label="Email"
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
