import { createSlice } from "@reduxjs/toolkit";
import { getSongs } from "../services/getSongs";
import { getSongDetails } from "../services/getSongDetails";
import { getRelatedSongs } from "../services/getRelatedSongs";
import { getArtistDetails } from "../services/getArtistDetails";

const SongsSlice = createSlice({
  name: "songs",
  initialState: {
    genreValue: "POP",
    songs: [],
    loading: false,
    error: null,
    // =====
    details: {},
    detailsLoading: false,
    detailsError: null,
    // ====
    relatedSongs: {},
    relatedSongsLoading: false,
    relatedSongsError: null,
    // =====
    artist: {},
    artistLoading: false,
    artistError: null,
  },
  reducers: {
    setGenre: (state, action) => {
      state.genreValue = action.payload;
    },
  },
  extraReducers: {
    // get Songs
    [getSongs.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getSongs.fulfilled]: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
      state.error = null;
    },
    [getSongs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // get Song Details
    [getSongDetails.pending]: (state) => {
      state.detailsLoading = true;
      state.detailsError = null;
    },
    [getSongDetails.fulfilled]: (state, action) => {
      state.detailsLoading = false;
      state.detailsError = null;
      state.details = action.payload;
    },
    [getSongDetails.rejected]: (state, action) => {
      state.detailsLoading = false;
      state.detailsError = action.payload;
      state.details = null;
    },

    // get Related Songs
    [getRelatedSongs.pending]: (state) => {
      state.relatedSongsLoading = true;
      state.relatedSongsError = null;
    },
    [getRelatedSongs.fulfilled]: (state, action) => {
      state.relatedSongsLoading = false;
      state.relatedSongsError = null;
      state.relatedSongs = action.payload;
    },
    [getRelatedSongs.rejected]: (state, action) => {
      state.relatedSongsLoading = false;
      state.relatedSongsError = action.payload;
      state.relatedSongs = null;
    },

    // get Artist Details
    [getArtistDetails.pending]: (state) => {
      state.artistLoading = true;
      state.artistError = null;
    },
    [getArtistDetails.fulfilled]: (state, action) => {
      state.artistLoading = false;
      state.artistError = null;
      state.artist = action.payload;
    },
    [getArtistDetails.rejected]: (state, action) => {
      state.artistLoading = false;
      state.artistError = action.payload;
      state.artist = null;
    },
  },
});

export const { setGenre } = SongsSlice.actions;
export default SongsSlice.reducer;
