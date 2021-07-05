import React, { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

import useNearScreen from "hooks/useNearScreen";

import Loader from "components/Loader";
import useGifs from "hooks/useGifs";
import ListOfGif from "components/ListOfGif";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{keyword} | giffy</title>
            <meta name="description" content={`results of ${keyword}`}></meta>
          </Helmet>
          <div className="m-10">
            <h4 className=" text-2xl text-yellow-400">{decodeURI(keyword)}</h4>
            <ListOfGif gifs={gifs} />
          </div>

          <div ref={externalRef}></div>
        </>
      )}
    </>
  );
};

export default React.memo(SearchResults);
