import React from "react";
import styles from "./MovieGrid.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
