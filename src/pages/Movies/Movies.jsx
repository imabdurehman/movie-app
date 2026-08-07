import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Movies.module.css";
import { fetchPopularMovies } from "../../services/MovieApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoader(true);
        setErrorMessage("");

        const data = await fetchPopularMovies();

        setMovies(data.results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoader(false);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <div className={styles.moviesContainer}>
      <h1 className={styles.heading}>Popular Movies</h1>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {loader && <Loader />}

      {!loader && (
        <div className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
