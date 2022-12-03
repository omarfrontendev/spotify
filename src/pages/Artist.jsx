import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsHeader, Loader, Error } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getArtistDetails } from "../redux/services/getArtistDetails";

const Artist = () => {
  const params = useParams().artistId;
  const dispatch = useDispatch();
  const { artist, artistLoading, artistError } = useSelector(
    (state) => state.songs
  );

  useEffect(() => {
    dispatch(getArtistDetails(params));
  }, [dispatch, params]);

  if (artistLoading) return <Loader />;
  if (artistError) return <Error />;

  return (
    <div className="mt-10 w-full pb-[101px]">
      <DetailsHeader
        image={
          artist?.artists && artist?.artists[params]?.attributes?.artwork?.url
        }
        title={artist?.artists && artist?.artists[params]?.attributes?.name}
        artistId={""}
        subtitle={""}
        songType={""}
      />
      <h3 className="font-bold text-2xl mb-4">Related Songs:</h3>
      <ul className="flex flex-col gap-2">
        {artist.songs &&
          Object.values(artist.songs)?.map((song, i) => (
            <li
              key={i}
              className="p-4 rounded-md bg-blue-100/5 flex items-center"
            >
              <img
                className="w-32 h-32 rounded-md mr-4"
                src={song?.attributes?.artwork?.url}
                alt=""
              />
              <div className="flex flex-col">
                <p className="mb-2 font-medium text-xl">
                  {song.attributes.name}
                </p>
                <p className="text-neutral-300 font-medium">
                  {song.attributes.albumName}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Artist;
