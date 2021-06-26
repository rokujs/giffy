import React from "react";
import "./styles.css";

import Gif from "../../components/Gif";
import Loader from "../../components/Loader";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  console.log("-");
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="ListOfGif m-10">
          {gifs.map(({ id, title, url }) => (
            <Gif key={id} title={title} url={url} id={id} />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(SearchResults);
