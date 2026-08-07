const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchSearchMovies = async (movieName) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.status_message || "Something went wrong. Please try again.",
    );
  }

  return data;
};

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.status_message || "Something went wrong. Please try again.",
    );
  }

  return data;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.status_message || "Something went wrong. Please try again.",
    );
  }

  return data;
};
