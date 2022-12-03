import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe900436famsh011f3beebf6b97cp165844jsnd8c26589ca94",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const getRelatedSongs = createAsyncThunk(
  "songs/getRelatedSongs",
  async (qyery, thunkAPI) => {
    const { rejectWithValues } = thunkAPI;

    try {
      const res = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/tracks/related?track_id=${qyery}`,
        options
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValues(error.message);
    }
  }
);
