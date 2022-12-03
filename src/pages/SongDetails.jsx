/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { DetailsHeader, RelatedSong, Loader, Error } from "../components/";
import { useDispatch, useSelector } from "react-redux";
import { getSongDetails } from "../redux/services/getSongDetails";
import { getRelatedSongs } from "../redux/services/getRelatedSongs";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const dispatch = useDispatch();
  const params = useParams().songId;
  const {
    details,
    detailsLoading,
    detailsError,
    relatedSongs,
    relatedSongsLoading,
    relatedSongsError,
  } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getSongDetails(params));
    dispatch(getRelatedSongs(params));
  }, [dispatch, params]);

  if (detailsLoading || relatedSongsLoading) return <Loader />;
  if (detailsError || relatedSongsError) return <Error />;

  return (
    <div className="mt-10 w-full pb-[101px]">
      <DetailsHeader
        image={details?.images?.coverart || ""}
        title={details?.title}
        artistId={
          details && details?.artists ? details?.artists[0]?.adamid : ""
        }
        subtitle={details?.subtitle}
        songType={details?.genres?.primary}
      />
      <h3 className="font-bold text-2xl mb-4">Lyrics:</h3>
      <ul className="mb-4 flex flex-col gap-2">
        {details?.sections?.map((section) => {
          if (section.type === "LYRICS") {
            return section?.text.map((t, i) => (
              <li key={i} className="text-base text-neutral-400">
                {t}
              </li>
            ));
          }
        })}
        {/* v */}
      </ul>
      <h3 className="font-bold text-2xl mb-4">Related Songs:</h3>
      <ul className="flex flex-col">
        {relatedSongs.length &&
          relatedSongs?.map((song, i) => (
            <RelatedSong
              key={i}
              i={i}
              song={song}
              songs={relatedSongs}
              artistid={
                details && details?.artists ? details?.artists[0]?.adamid : ""
              }
            />
          ))}
      </ul>
    </div>
  );
};

export default SongDetails;
