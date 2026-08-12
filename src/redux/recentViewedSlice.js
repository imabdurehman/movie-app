import { createSlice } from "@reduxjs/toolkit";

const savedRecentMovies = localStorage.getItem("recentViewed");

const recentViewedSlice = createSlice({
  name: "recentViewed",

  initialState: savedRecentMovies ? JSON.parse(savedRecentMovies) : [],

  reducers: {
    addRecentMovie: (state, action) => {
      const recentMovies = state.filter(
        (movie) => movie.id !== action.payload.id,
      );

      return [action.payload, ...recentMovies].slice(0, 8);
    },
  },
});

export const { addRecentMovie } = recentViewedSlice.actions;

export default recentViewedSlice.reducer;
