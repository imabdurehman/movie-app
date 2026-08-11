import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import commonStyles from "../../styles/common.module.css";
import { fetchPopularMovies } from "../../services/MovieApi";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Pagination from "../../components/Pagination/Pagination";

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
    <div className={commonStyles.moviesContainer}>
      <h1 className={commonStyles.moviesHeading}>Popular Movies</h1>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {loader && <Loader />}

      {!loader && <MovieGrid movies={movies} />}

      {movies.length > 0 && (
        <Pagination
          currentPage={moviePage}
          totalPages={totalPages}
          onPageChange={setMoviePage}
        />
      )}
    </div>
  );
};

export default Movies;
