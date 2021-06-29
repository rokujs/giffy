import React from "react";
import "./styles.css";

import Gif from "../../components/Gif";
import Loader from "../../components/Loader";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="m-10">
          <h4 className=" text-2xl text-yellow-400">{decodeURI(keyword)}</h4>
          <div className="ListOfGif mt-3">
            {gifs.map(({ id, title, url }) => (
              <Gif key={id} title={title} url={url} id={id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(SearchResults);
