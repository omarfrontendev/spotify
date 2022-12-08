import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";

const SongCard = ({ song, isPlaying, activeSong, data, i, id }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="w-[230px] grow max-w-[400px] p-4 rounded-md bg-white/5 backdrop-blur-sm animate-slideup">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center group-hover:bg-black/50 rounded-md ${
            activeSong.title === song.title ? "opacity-100 bg-black/50" : ""
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          src={song.images?.coverart}
          className="w-full h-full object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <Link
          to={`/songs/${song.key}`}
          className="text-2xl mt-4 mb-2  font-semibold w-[250px] max-w-full truncate"
        >
          {song.title}
        </Link>
        <Link
          to={`/artists/${id}` || "/"}
          className="text-sm text-gray-300 w-[250px] max-w-full truncate"
        >
          {song.subtitle}
        </Link>
      </div>
    </div>
  );
};

export default SongCard;
