import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ image, title, subtitle, songType, artistId }) => {
  return (
    <div className="my-10 flex gap-4 items-center flex-col sm:flex-row text-center sm:text-left">
      <img
        src={image}
        className="w-[200px] h-[200px] rounded-full ring-4 ring-white object-cover"
        alt=""
      />
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        {artistId && (
          <Link
            to={`/artists/${artistId}` || "/"}
            className="text-gray-300 text-base font-medium mb-0.5"
          >
            {subtitle}
          </Link>
        )}
        {songType && (
          <span className="text-gray-300 text-base font-medium">
            {songType}
          </span>
        )}
      </div>
    </div>
  );
};

export default DetailsHeader;
