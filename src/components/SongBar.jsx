import React from "react";
import MusicPlayer from "./MusicPlayer";

const SongBar = () => {
  return (
    <div className="fixed items-center bottom-0 left-0 w-full py-4 animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg  z-10">
      <MusicPlayer />
    </div>
  );
};

export default SongBar;
