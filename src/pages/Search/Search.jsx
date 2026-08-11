import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { fetchSearchMovies } from "../../services/MovieApi";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import NoData from "../../components/NoData/NoData";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Pagination from "../../components/Pagination/Pagination";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [noDataMessage, setNoDataMessage] = useState("");

  const [searchPage, setSearchPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const hasSearched =
    loader || searchResult.length > 0 || errorMessage || noDataMessage;

  const handleMovieName = (e) => {
    setMovieName(e.target.value);

    setErrorMessage("");
    setNoDataMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = movieName.trim();

    if (!query) {
      setErrorMessage("Please enter movie name.");
      return;
    }

    setSearchPage(1);
    setSearchQuery(query);
  };

  useEffect(() => {
    const loadSearchMovies = async () => {
      if (!searchQuery) return;

      try {
        setLoader(true);
        setErrorMessage("");
        setNoDataMessage("");

        const data = await fetchSearchMovies(searchQuery, searchPage);

        if (data.results.length === 0) {
          setNoDataMessage(
            `No movies found for "${searchQuery}". Try another title.`,
          );

          setSearchResult([]);
          return;
        }

        setSearchResult(data.results);

        setTotalPages(data.total_pages);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoader(false);
      }
    };

    loadSearchMovies();
  }, [searchPage, searchQuery]);

  return (
    <div
      className={`${styles.searchContainer} ${hasSearched ? styles.activeSearch : styles.initialSearch}`}
    >
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

      {!loader && <MovieGrid movies={searchResult} />}

      {searchResult.length > 0 && (
        <Pagination
          currentPage={searchPage}
          totalPages={totalPages}
          onPageChange={setSearchPage}
        />
      )}
    </div>
  );
};

export default Search;
