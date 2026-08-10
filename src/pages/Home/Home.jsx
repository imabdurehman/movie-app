import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useMovie } from "../../context/MoviesContext";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
  const { recentlyViewed } = useMovie();

  return (
    <main className={styles.homePage}>
      <section className={styles.hero}>
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

      <section className={styles.recentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recently Viewed</h2>

            <p className={styles.sectionDescription}>
              Continue exploring the movies you've recently viewed.
            </p>
          </div>

          <div className={styles.recentMoviesGrid}>
            {recentlyViewed.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
