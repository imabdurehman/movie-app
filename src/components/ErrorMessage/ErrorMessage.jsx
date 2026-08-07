import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <h3 className={styles.errorTitle}>Oops!</h3>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
