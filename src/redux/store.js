import { configureStore } from "@reduxjs/toolkit";
import favouriteMovieReducer from "./favouriteMovieSlice";
import recentViewedReducer from "./recentViewedSlice";

export const store = configureStore({
  reducer: {
    favouriteMovie: favouriteMovieReducer,
    recentViewed: recentViewedReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("favouriteMovies", JSON.stringify(state.favouriteMovie));

  localStorage.setItem("recentViewed", JSON.stringify(state.recentViewed));
});
