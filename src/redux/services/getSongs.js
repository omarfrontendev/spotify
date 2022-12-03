import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe900436famsh011f3beebf6b97cp165844jsnd8c26589ca94",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const getSongs = createAsyncThunk(
  "songs/getSongs",
  async (query, thunkAPI) => {
    const { rejectWithValues, getState } = thunkAPI;
    const genre = getState().songs.genreValue;
    try {
      const res = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${
          query || genre
        }`,
        options
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValues(error.message);
    }
  }
);
