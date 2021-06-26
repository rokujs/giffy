import React, { useState } from "react";
import { Link, useLocation } from "wouter";

import useGifs from "../../hooks/useGifs";
import Loader from "../../components/Loader";
import Gif from "../../components/Gif";

const links = ["colombia", "anime", "DemonSlayer", "mongol"];

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
    <div className="w-full my-8 text-center">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
        <button>Buscar</button>
      </form>

      <h4 className=" text-2xl my-8 text-yellow-400">Gif más populares</h4>
      <ul className="list-inside bg-rose-200 text-yellow-200 text-lg">
        {links.map((link) => (
          <li key={link}>
            <Link className="hover:underline" to={`/search/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <h4 className=" text-2xl my-8 text-yellow-400">Ultimos Gifs</h4>
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
  );
};

export default Home;
