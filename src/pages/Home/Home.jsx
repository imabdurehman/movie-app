import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
  const recentMovies = useSelector((state) => state.recentViewed);

  return (
    <main className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <p className={styles.tag}>Movie Discovery Platform</p>

          <h1 className={styles.title}>
            Discover. Explore. <span>Enjoy.</span>
          </h1>

          <p className={styles.description}>
            Explore a vast collection of movies, discover trending titles, and
            find your next favorite film all in one place.
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

          {recentMovies.length > 0 ? (
            <div className={styles.recentMoviesGrid}>
              {recentMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <p className={styles.emptyMessage}>
              No recently viewed movies yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
