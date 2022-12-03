import React, { useEffect } from "react";
import { getSongs } from "../redux/services/getSongs";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Error, SongsList, Header } from "../components/";

const TopArtists = () => {
  const dispatch = useDispatch();
  const { songs, loading, error, genreValue } = useSelector(
    (state) => state.songs
  );
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(getSongs(genreValue));
  }, [dispatch, genreValue]);

  return (
    <>
      <Header title="Top Artists" />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : !songs.length ? (
        <p className="w-full text-center text-3xl">Ther's No Songs</p>
      ) : (
        <SongsList
          songs={songs.length > 10 ? songs.slice(0, 10) : songs}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={songs}
        />
      )}
    </>
  );
};

export default TopArtists;
