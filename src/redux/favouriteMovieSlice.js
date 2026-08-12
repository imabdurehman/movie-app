import { createSlice } from "@reduxjs/toolkit";

const savedFavourites = localStorage.getItem("favouriteMovies");

const favouriteMovieSlice = createSlice({
  name: "favouriteMovies",

  initialState: savedFavourites ? JSON.parse(savedFavourites) : [],

  reducers: {
    addFavourite: (state, action) => {
      const alreadyExist = state.some(
        (movie) => movie.id === action.payload.id,
      );

      if (alreadyExist) {
        return state;
      }

      return [...state, action.payload];
    },

    removeFavourite: (state, action) =>
      state.filter((movie) => movie.id !== action.payload),
  },
});

export const { addFavourite, removeFavourite } = favouriteMovieSlice.actions;

export default favouriteMovieSlice.reducer;
