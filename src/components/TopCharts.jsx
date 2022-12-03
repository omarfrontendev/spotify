import React from "react";
import { useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import RelatedSong from "./RelatedSong";

const TopCharts = ({ open, onOpen }) => {
  const { songs } = useSelector((state) => state.songs);

  return (
    <div
      className={`fixed inset-0 py-4 bg-gradient-to-br from-black to-[#121286] lg:w-[250px] lg:right-0 lg:left-auto lg:from-transparent lg:mt-10 p-4 lg:p-0lg:pr-2  transition-all lg:translate-x-0 z-20 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="lg:hidden absolute top-4 right-4"
        onClick={() => onOpen(false)}
      >
        <RiCloseLine size={35} />
      </button>
      <h2 className="text-2xl font-medium">Top Chart</h2>
      <ul className="flex flex-col mt-6 lg:gap-4">
        {songs.length &&
          songs
            .slice(0, 5)
            .map((song, i) => (
              <RelatedSong
                song={song}
                i={i}
                songs={songs}
                key={i}
                artistid={song?.artists[0]?.adamid}
              />
            ))}
      </ul>
    </div>
  );
};

export default TopCharts;
