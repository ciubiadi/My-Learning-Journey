import { useState } from "react";
// import { useRef } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const formSubmitHabdler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name + " - with useState");

    setName("");
    setNameIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHabdler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
