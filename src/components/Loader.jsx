import React from "react";
import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <img
        src={loader}
        alt="loader"
        className="w-32 h-32 object-contain max-w-ful"
      />
      <p className="text-xl mt-4 font-medium">Loading...!</p>
    </div>
  );
};

export default Loader;
