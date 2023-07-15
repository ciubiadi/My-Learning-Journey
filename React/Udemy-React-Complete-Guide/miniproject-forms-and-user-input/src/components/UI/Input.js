const Input = (props) => {
  const nameInputClasses = !props.isValid
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={nameInputClasses}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
        value={props.inputValue}
        name={props.name}
      />
      {!props.isValid && (
        <p className="error-text">
          {props.label} must not be empty and must be valid
        </p>
      )}
    </div>
  );
};

export default Input;
