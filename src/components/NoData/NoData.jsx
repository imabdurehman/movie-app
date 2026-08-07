import React from "react";
import styles from "./NoData.module.css";

const NoData = ({ message }) => {
  return (
    <div className={styles.noDataContainer}>
      <h2 className={styles.noDataTitle}>No Results Found</h2>

      <p className={styles.noDataText}>{message}</p>
    </div>
  );
};

export default NoData;
