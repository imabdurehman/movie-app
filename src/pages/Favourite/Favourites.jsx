import React from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import styles from "./Favourite.module.css";
import commonStyles from "../../styles/common.module.css";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovie);

  return (
    <div className={commonStyles.moviesContainer}>
      <h1 className={commonStyles.moviesHeading}>Favourite Movies</h1>

      {favouriteMovies.length === 0 && (
        <p className={styles.emptyMessage}>No favourite movies yet.</p>
      )}

      <MovieGrid movies={favouriteMovies} />
    </div>
  );
};

export default Favourites;
