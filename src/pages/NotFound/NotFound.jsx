import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <h1>
          4<span>0</span>4
        </h1>

        <h2>Page Not Found</h2>

        <p>Sorry, the page you are looking for does not exist.</p>

        <Link to="/" className={styles.button}>
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
