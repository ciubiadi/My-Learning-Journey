import React, { useRef } from "react";
import Card from "../components/UI/Card";
import Button from "./UI/Button";
import styles from "./RefForm.module.css";

const RefForm = () => {
  //refs are used to read values
  const taskRef = useRef();

  const submitTaskHandler = (e) => {
    e.preventDefault();
    console.log(taskRef.current.value, " (taskRef value)");
    taskRef.current.value = "";
  };

  return (
    <React.Fragment>
      <Card className={styles.input}>
        <form onSubmit={submitTaskHandler}>
          <label htmlFor="task">Task</label>
          <input id="task" type="text" ref={taskRef} />
          <Button type="submit">Log Task</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default RefForm;
