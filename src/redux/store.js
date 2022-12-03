import { configureStore } from "@reduxjs/toolkit";
import songs from "./features/songsSlice";
import player from "./features/playerSlice";

const store = configureStore({
  reducer: {
    songs,
    player,
  },
});

export default store;
