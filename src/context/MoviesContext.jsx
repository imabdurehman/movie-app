import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";

export const MovieContext = createContext(null);

export const useMovie = () => {
  const movie = useContext(MovieContext);
  return movie;
};

export const MovieProvider = ({ children }) => {
  //global states
  const [favouriteMovies, setFavouriteMovies] = useState(() => {
    const saved = localStorage.getItem("favouriteMovies");
    return saved ? JSON.parse(saved) : [];
  });
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem("recentViewed");
    return saved ? JSON.parse(saved) : [];
  });

  const addRecentMovie = useCallback((movie) => {
    setRecentlyViewed((prev) => {
      const recentMovie = prev.filter((item) => item.id !== movie.id);

      return [movie, ...recentMovie].slice(0, 5);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));

    localStorage.setItem("recentViewed", JSON.stringify(recentlyViewed));
  }, [favouriteMovies, recentlyViewed]);

  return (
    <MovieContext.Provider
      value={{
        favouriteMovies,
        setFavouriteMovies,
        recentlyViewed,
        setRecentlyViewed,
        addRecentMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
