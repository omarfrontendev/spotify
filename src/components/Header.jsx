import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../redux/features/songsSlice";
import { genres } from "../assets/constants";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const { genreValue } = useSelector((state) => state.songs);
  return (
    <div className="flex flex-col w-full items-cener justify-between my-8 md:flex-row">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <select
        onChange={(e) => dispatch(setGenre(e.target.value))}
        className="bg-black py-2 px-3 mx-auto md:mx-0 rounded-md w-fit text-neutral-300 outline-none text-sm"
        value={genreValue}
      >
        {genres.map((genre) => (
          <option className="p-2" value={genre.value} key={genre.value}>
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
