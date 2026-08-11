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

  const [moviePage, setMoviePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoader(true);
        setErrorMessage("");

        const data = await fetchPopularMovies(moviePage);

        setMovies(data.results);

        setTotalPages(data.total_pages);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoader(false);
      }
    };

    loadPopularMovies();
  }, [moviePage]);

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

      {movies.length > 0 && (
        <div className={styles.pagination}>
          <button
            onClick={() => {
              setMoviePage((prev) => Math.max(1, prev - 1));
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            disabled={moviePage === 1}
          >
            Previous
          </button>
          <span>{moviePage}</span>
          <button
            onClick={() => {
              setMoviePage((prev) => prev + 1);
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            disabled={moviePage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
