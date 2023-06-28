import React, { useRef } from "react";
import styles from "./AddCharacter.module.css";

interface AddCharacterProps {
  addCharacterHandler: (character: {
    name: string;
    birth_year: string;
    url: string;
    id: string;
  }) => void;
}

const AddCharacter: React.FC<AddCharacterProps> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const birthYearRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const character = {
      name: String(nameRef.current?.value),
      birth_year: String(birthYearRef.current?.value),
      url: new Date().toLocaleDateString("en-US"),
      id: nameRef.current?.value + " " + new Date().toLocaleDateString("en-US"),
    };

    props.addCharacterHandler(character);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="birtYear">Birth Year</label>
        <input type="text" id="birtYear" ref={birthYearRef} />
      </div>
      <button>Add Character</button>
    </form>
  );
};

export default AddCharacter;
