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

  const addFavourite = (movie) => {
    setFavouriteMovies((prev) => {
      const alreadyExist = prev.some((item) => item.id === movie.id);

      if (alreadyExist) {
        return prev;
      }

      return [...prev, movie];
    });
  };

  const removeFavourite = (id) => {
    setFavouriteMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const addRecentMovie = useCallback((movie) => {
    setRecentlyViewed((prev) => {
      const recentMovies = prev.filter((item) => item.id !== movie.id);

      return [movie, ...recentMovies].slice(0, 5);
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
        recentlyViewed,
        addRecentMovie,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
