import { createContext, useState, useContext } from "react";

export const MovieContext = createContext(null);

export const useMovie = () => {
  const movie = useContext(MovieContext);
  return movie;
};

export const MovieProvider = ({ children }) => {
  //global states
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        favouriteMovies,
        setFavouriteMovies,
        recentlyViewed,
        setRecentlyViewed,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
