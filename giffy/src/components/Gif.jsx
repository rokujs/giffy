import React from "react";
import { Link } from "wouter";

const Gif = ({ title, url, id }) => {
  return (
    <Link to={`/gif/#${id}`}>
      <div className=" p-4 m-2 rounded-xl bg-gray-100 hover:bg-gray-300 text-center ListOfGifs-item">
        <div className="">
          <h4>{title}</h4>
          <img
            loading="lazy"
            src={url}
            alt={title}
            className="mt-5 rounded-sm m-auto rounded"
          />
        </div>
      </div>
    </Link>
  );
};

export default Gif;
