import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.tag}>Movie Streaming Platform</p>

        <h1 className={styles.title}>
          Discover. Stream. <span>Enjoy.</span>
        </h1>

        <p className={styles.description}>
          Explore thousands of movies, discover trending titles, and find your
          next favorite film all in one place.
        </p>

        <div className={styles.buttonGroup}>
          <Link to="/movies" className={styles.primaryBtn}>
            Explore Movies
          </Link>

          <Link to="/search" className={styles.secondaryBtn}>
            Search Movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
