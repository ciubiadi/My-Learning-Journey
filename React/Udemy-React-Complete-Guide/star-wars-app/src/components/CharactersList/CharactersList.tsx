import React from "react";
import styles from "./CharactersList.module.css";

const CharactersList: React.FC<{
  name: string;
  birthYear: string;
}> = (props) => {
  return (
    <div className={styles.columns}>
      <div className={styles.card}>
        <p>Name: {props.name}</p>
        <p>Birth Year: {props.birthYear}</p>
      </div>
    </div>
  );
};

export default CharactersList;
