import React, { useState } from "react";
import { useLocation } from "wouter";

import useGifs from "../../hooks/useGifs";
import Loader from "../../components/Loader";
import Gif from "../../components/Gif";
import Trending from "../../components/Trending";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="w-full my-8 text-center grid grid-rows-home grid-cols-home">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center col-start-1 col-end-2"
      >
        <input
          placeholder="Search a gif here"
          type="text"
          value={keyword}
          onChange={handleChange}
          className="border-b-2 border-indigo-600 p-3 rounded-tl-lg focus:outline-none"
        />
        <button className="bg-indigo-600 rounded-tr-lg h-12 w-12 text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 m-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>

      <Trending />

      <div className="col-start-1 col-end-2 row-start-2 row-end-3">
        <h4 className=" text-2xl my-8 text-yellow-400">Last Gifs</h4>
        {loading ? (
          <Loader />
        ) : (
          <div className="ListOfGif m-10">
            {gifs.map(({ id, title, url }) => (
              <Gif key={id} title={title} url={url} id={id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
