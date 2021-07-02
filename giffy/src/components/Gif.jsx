import React from "react";
import { Link } from "wouter";

const Gif = ({ title, url, id }) => {
  return (
    <Link to={`/gif/${id}`}>
      <div className="h-max p-4 rounded-xl bg-gray-100 hover:bg-gray-300 text-center w-full inline-block">
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

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
