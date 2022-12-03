import React from "react";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useSelector, useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";

const RelatedSong = ({ i, song, songs, artistid }) => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, songs, i }));
    dispatch(playPause(true));
  };

  return (
    <li
      className="flex p-4 w-full justify-between items-center hover:bg-neutral-500/30 rounded-md lg:p-2"
      key={i}
    >
      <div className="flex justify-start items-center gap-4 lg:gap-2">
        <img
          className="w-16 rounded-md lg:w-14"
          src={song.images?.coverart}
          alt=""
        />
        <div className="flex flex-col">
          <Link
            to={`/songs/${song.key}`}
            className="text-xl font-medium mb-1 w-[150px] max-w-full truncate cursor-pointer lg:text-base lg:max-w-[100px]"
          >
            {song?.title || song?.attributes?.name}
          </Link>
          <Link
            to={`/artists/${artistid}`}
            className="text-neutral-300 text-sm font-medium cursor-pointer truncate w-[150px] max-w-full lg:max-w-[100px]"
          >
            {song?.subtitle || song?.attributes?.artistName}
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </li>
  );
};

export default RelatedSong;
