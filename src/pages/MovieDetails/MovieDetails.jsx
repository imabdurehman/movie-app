import React, { useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieDetails } from "../../services/MovieApi";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaStar, FaHeart } from "react-icons/fa";
import { useMovie } from "../../context/MoviesContext";

const MovieDetails = () => {
  const { id } = useParams();
  const { favouriteMovies, setFavouriteMovies, addRecentMovie } = useMovie();

  const [moviedetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setLoader(true);
        setErrorMessage("");

        const data = await fetchMovieDetails(id);

        setMovieDetails(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoader(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  useEffect(() => {
    if (moviedetails) {
      addRecentMovie(moviedetails);
    }
  }, [moviedetails, addRecentMovie]);

  const isFavourite = favouriteMovies.some(
    (item) => item?.id === moviedetails?.id,
  );

  const addFavourite = (moviedetails) => {
    setFavouriteMovies((prev) => {
      const alreadyExist = prev.some((item) => item.id === moviedetails.id);

      if (alreadyExist) {
        return prev;
      }

      return [...prev, moviedetails];
    });
  };

  const removeFavourite = (id) => {
    setFavouriteMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <>
      {loader && <Loader />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {!loader && !errorMessage && moviedetails && (
        <div className={styles.movieDetailsContainer}>
          <div className={styles.backdrop}>
            <img
              src={`https://image.tmdb.org/t/p/original${moviedetails?.backdrop_path}`}
              alt={moviedetails?.title}
            />
          </div>

          <div className={styles.movieContent}>
            <div className={styles.posterSection}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500${moviedetails?.poster_path}`}
                alt={moviedetails?.title}
              />
            </div>

            <div className={styles.movieInfo}>
              <div className={styles.titleSection}>
                <h1 className={styles.title}>{moviedetails?.title}</h1>

                <button
                  className={styles.favoriteButton}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    isFavourite
                      ? removeFavourite(moviedetails.id)
                      : addFavourite(moviedetails);
                  }}
                >
                  <FaHeart
                    className={isFavourite ? styles.activeHeart : styles.heart}
                  />
                </button>
              </div>

              <div className={styles.metaInfo}>
                <span>
                  <FaStar className={styles.ratingIcon} />{" "}
                  {moviedetails.vote_average?.toFixed(1)}
                </span>

                <span>
                  <FaCalendarAlt /> {moviedetails.release_date?.slice(0, 4)}
                </span>

                <span>
                  <FaClock /> {moviedetails?.runtime} min
                </span>
              </div>

              <div className={styles.genres}>
                {moviedetails.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              <p className={styles.tagline}>{moviedetails.tagline}</p>
            </div>
          </div>

          <div className={styles.overviewSection}>
            <h2>Overview</h2>

            <p>{moviedetails.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
