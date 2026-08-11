import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => {
          onPageChange((prev) => Math.max(1, prev - 1));
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => {
          onPageChange((prev) => prev + 1);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
