import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";

import useGifs from "hooks/useGifs";
import Loader from "components/Loader";
import ListOfGifs from "components/ListOfGif";
import Trending from "components/Trending";
import SearchForm from "components/SearchForm";

const Home = () => {
  const { loading, gifs } = useGifs();
  const [path, pushLocation] = useLocation();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | giffy</title>
      </Helmet>
      <div className="w-full my-8 text-center grid grid-rows-home sm:grid-cols-home grid-cols-1">
        <SearchForm onSubmit={handleSubmit} />

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 min-h-screen">
          <h4 className=" text-2xl my-8 text-yellow-400">Last Gifs</h4>
          {loading ? <Loader /> : <ListOfGifs gifs={gifs} />}
        </div>

        <Trending />
      </div>
    </>
  );
};

export default Home;
