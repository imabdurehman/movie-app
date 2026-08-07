import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className={styles.cardBody}>
        <h2 className={styles.title}>{movie.title}</h2>

        <div className={styles.info}>
          <span>Rating : ⭐ {movie.vote_average.toFixed(1)}</span>
          <span>Release : {movie.release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
