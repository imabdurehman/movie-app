import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { useMovie } from "../../context/MoviesContext";

const MovieCard = ({ movie }) => {
  const { favouriteMovies, addFavourite, removeFavourite } = useMovie();

  const isFavourite = favouriteMovies.some((item) => item.id === movie.id);

  return (
    <Link to={`/movie/${movie?.id}`} className={styles.card}>
      <div className={styles.posterWrapper}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />

        <button
          className={styles.favoriteButton}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            isFavourite ? removeFavourite(movie.id) : addFavourite(movie);
          }}
        >
          <FaHeart
            className={isFavourite ? styles.activeHeart : styles.heart}
          />
        </button>
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.title}>{movie?.title}</h2>

        <div className={styles.info}>
          <span>
            Rating : <FaStar className={styles.ratingIcon} />{" "}
            {movie.vote_average?.toFixed(1)}
          </span>

          <span>Release : {movie.release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
