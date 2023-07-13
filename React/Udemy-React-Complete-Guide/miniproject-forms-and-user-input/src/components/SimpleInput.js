import { useState } from "react";
// import { useRef } from "react";

const SimpleInput = (props) => {
  //secibd aooriach
  // const nameInputRef = useRef();

  const [name, setName] = useState("");
  // const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);

    // if (event.target.value.trim() !== "") {
    //   setNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
    // if (name.trim() === "") {
    //   setNameIsValid(false);
    // }
  };

  const formSubmitHabdler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);

    // if (name.trim() === "") {
    //   setNameIsValid(false);
    //   return;
    // }

    if (!nameIsValid) {
      return;
    }

    // setNameIsValid(true);

    // Second appraoch is to use useRef
    // const nameFromRef = nameInputRef.current.value;

    console.log(name + " - with useState");
    // console.log(nameFromRef + " - with useRef");

    /* nameInputRef.current.value = ''; => THIS IS NOT IDEAL BECAUSE I AM MANIPULATING DIRECTLY 
    THE DOM */
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
          // ref={nameInputRef}
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
