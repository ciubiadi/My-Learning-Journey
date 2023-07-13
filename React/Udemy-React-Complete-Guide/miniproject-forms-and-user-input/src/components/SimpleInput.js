import { useState, useRef } from "react";

const SimpleInput = (props) => {
  //secibd aooriach
  const nameInputRef = useRef();

  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmitHabdler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    // Second appraoch is to use useRef
    const nameFromRef = nameInputRef.current.value;

    console.log(name + " - with useState");
    console.log(nameFromRef + " - with useRef");

    /* nameInputRef.current.value = ''; => THIS IS NOT IDEAL BECAUSE I AM MANIPULATING DIRECTLY 
    THE DOM */
    setName("");
  };

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHabdler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={name}
        />
        {!nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
