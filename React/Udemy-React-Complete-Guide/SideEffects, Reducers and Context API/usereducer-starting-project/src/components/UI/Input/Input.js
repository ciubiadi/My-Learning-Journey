import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // "focus" can be anything, it is basically the externally name
  //this is basically a translation object between internal functionalities and the parent Component
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  // Remember userEffect runs after the component was rendered
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);
  return (
    <div
      className={`${styles.control} ${
        props.isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
