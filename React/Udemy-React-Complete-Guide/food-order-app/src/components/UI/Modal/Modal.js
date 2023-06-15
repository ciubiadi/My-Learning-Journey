import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </React.Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
