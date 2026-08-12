import React, { useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieDetails } from "../../services/MovieApi";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaStar, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/favouriteMovieSlice";
import { addRecentMovie } from "../../redux/recentViewedSlice";

const MovieDetails = () => {
  const { id } = useParams();

  const [moviedetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const favouriteMovies = useSelector((state) => state.favouriteMovie);

  const isFavourite = favouriteMovies.some(
    (item) => item.id === moviedetails?.id,
  );

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
      dispatch(addRecentMovie(moviedetails));
    }
  }, [moviedetails, dispatch]);

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
                      ? dispatch(removeFavourite(moviedetails.id))
                      : dispatch(addFavourite(moviedetails));
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
                  <FaCalendarAlt className={styles.calendarIcon} />{" "}
                  {moviedetails.release_date?.slice(0, 4)}
                </span>

                <span>
                  <FaClock className={styles.timeIcon} />{" "}
                  {moviedetails?.runtime} min
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
