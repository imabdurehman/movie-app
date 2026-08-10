import React from "react";
import { useMovie } from "../../context/MoviesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Favourite.module.css";

const Favourites = () => {
  const { favouriteMovies } = useMovie();

  return (
    <div className={styles.favouriteContainer}>
      <h1 className={styles.heading}>Favourite Movies</h1>

      {favouriteMovies.length === 0 && (
        <p className={styles.emptyMessage}>No favourite movies yet.</p>
      )}

      <div className={styles.moviesGrid}>
        {favouriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
