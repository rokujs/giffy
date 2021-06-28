import React, { useContext } from "react";
import Gif from "../../components/Gif";
import GifsContext from "../../context/GifsContext";

function Detail({ params }) {
  const { id } = params;

  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((g) => g.id === id);

  return <Gif {...gif} />;
}

export default Detail;
