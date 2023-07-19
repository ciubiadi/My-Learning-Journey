import React, { useRef, useState } from "react";
import "./CheckoutForm.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const CheckoutForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const inputName = nameInputRef.current.value;
    const inputStreet = streetInputRef.current.value;
    const inputPostalCode = postalCodeInputRef.current.value;
    const inputCity = cityInputRef.current.value;

    const inputNameIsValid = !isEmpty(inputName);
    const inputStreetIsValid = !isEmpty(inputStreet);
    const inputPostalCodeIsValid = isFiveChars(inputPostalCode);
    const inputCityIsValid = !isEmpty(inputCity);

    setFormInputsValidity({
      name: inputNameIsValid,
      street: inputStreetIsValid,
      city: inputCityIsValid,
      postalCode: inputPostalCodeIsValid,
    });

    const formIsValid =
      inputNameIsValid &&
      inputStreetIsValid &&
      inputPostalCodeIsValid &&
      inputCityIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit cart form data
    props.onSubmit({
      name: inputName,
      street: inputStreet,
      postalCode: inputPostalCode,
      city: inputCity,
    });
  };

  return (
    <form className="form" onSubmit={confirmHandler}>
      <div className={`control ${!formInputsValidity.name && " invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`control ${!formInputsValidity.street && " invalid"}`}>
        <label htmlFor="street">Street</label>
        <input type="text" name="street" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`control ${!formInputsValidity.postalCode && " invalid"}`}
      >
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          ref={postalCodeInputRef}
        />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid psotal code (5 characters code)!</p>
        )}
      </div>
      <div className={`control ${!formInputsValidity.city && " invalid"}`}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className="actions">
        <button type="button" onClick={props.closeCart}>
          Cancel
        </button>
        <button className="submit">Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
