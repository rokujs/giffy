import React from "react";

import Gif from "./Gif";

function ListOfGif({ gifs }) {
  return (
    <div
      className="
          grid
          gap-4
          grid-cols-secGif
          grid-flow-row-dense
          auto-rows-max
          m-10"
    >
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}

export default ListOfGif;
