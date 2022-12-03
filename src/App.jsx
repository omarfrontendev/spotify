import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, SongBar, TopCharts } from "./components";
import { Discover, SongDetails, Artist, TopSongs, TopArtists } from "./pages";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openTopCharts, setOpenTopCharts] = useState(false);

  return (
    <div className="relative pb-[101px] flex justify-end min-h-screen bg-gradient-to-br from-black to-[#121286]">
      <button
        className="md:hidden fixed top-4 left-4 z-10"
        onClick={() => setOpenSidebar(true)}
      >
        <AiOutlineMenu size={30} className="text-neutral-300" />
      </button>
      <button
        className="lg:hidden fixed top-4 right-4 z-10"
        onClick={() => setOpenTopCharts(true)}
      >
        <BsMusicNoteList size={30} className="text-neutral-300" />
      </button>
      <Sidebar open={openSidebar} onOpen={setOpenSidebar} />
      <div className="w-full flex md:basis-[80%] text-white p-4">
        <div className="w-full flex flex-col basis-full items-center mr-0 lg:mr-[250px]">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/top-charts" element={<TopSongs />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/songs/:songId" element={<SongDetails />} />
            <Route path="/artists/:artistId" element={<Artist />} />
          </Routes>
        </div>
        <TopCharts open={openTopCharts} onOpen={setOpenTopCharts} />
      </div>
      {activeSong?.title && <SongBar />}
    </div>
  );
};

export default App;
