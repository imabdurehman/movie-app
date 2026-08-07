import React, { useState } from "react";
import styles from "./Search.module.css";
// import { useMovie } from "../../context/MoviesContext";
import { fetchSearchMovies } from "../../services/MovieApi";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import NoData from "../../components/NoData/NoData";
import MovieCard from "../../components/MovieCard/MovieCard";

const Search = () => {
  // const {
  //   favouriteMovies,
  //   setFavouriteMovies,
  //   recentlyViewed,
  //   setRecentlyViewed,
  // } = useMovie();

  const [searchResult, setSearchResult] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [noDataMessage, setNoDataMessage] = useState("");

  const handleMovieName = (e) => {
    setMovieName(e.target.value);

    setErrorMessage("");
    setNoDataMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (movieName.trim() === "") {
      setErrorMessage("Please enter movie name.");
      return;
    }

    try {
      setLoader(true);
      setErrorMessage("");
      setNoDataMessage("");
      setSearchResult([]);

      const data = await fetchSearchMovies(movieName);

      if (data.results.length === 0) {
        setNoDataMessage(
          `No movies found for "${movieName}". Try another title.`,
        );
        return;
      }

      setSearchResult(data.results);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.headingSection}>
        <h1 className={styles.heading}>Search Movies</h1>

        <p className={styles.subHeading}>
          Find your favorite movies by searching with the title.
        </p>
      </div>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Enter movie name..."
          value={movieName}
          onChange={handleMovieName}
        />

        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {loader && <Loader />}

      {noDataMessage && <NoData message={noDataMessage} />}

      {!loader && (
        <div className={styles.moviesGrid}>
          {searchResult.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
