import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { RiCloseLine } from "react-icons/ri";

const Sidebar = ({ open, onOpen }) => {
  // const [openMenu, setOpenMenu] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 w-[240px] max-w-full md:w-[20%] h-screen -translate-x-[calc(100%+50px)] md:translate-x-0 transition-all bg-[#191624] py-10 px-4 flex flex-col ${
        open ? "translate-x-0 z-10" : "-translate-x-[calc(100%+50px)] "
      }`}
    >
      <span className="w-full text-center text-white text-2xl">Logo</span>
      <ul className="flex flex-col gap-8 mt-10">
        {links.map((link) => (
          <NavLink
            to={link.to}
            key={link.name}
            className="flex gap-2 items-center text-neutral-300 text-[14px] lg:text-[16px] font-medium"
            onClick={() => onOpen(false)}
          >
            <link.icon className="w-6 h-6" />
            {link.name}
          </NavLink>
        ))}
      </ul>
      <button
        className="md:hidden absolute top-4 right-4 text-neutral-300 text-xl"
        onClick={() => onOpen(false)}
      >
        <RiCloseLine />
      </button>
    </div>
  );
};

export default Sidebar;
