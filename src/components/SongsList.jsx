import React from "react";
import { SongCard } from "./";

const SongsList = ({ songs, isPlaying, activeSong, data }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-6">
      {songs.map((song, i) => (
        <SongCard
          song={song}
          key={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          i={i}
          id={song?.artists ? song?.artists[0]?.adamid : ""}
        />
      ))}
    </div>
  );
};

export default SongsList;
