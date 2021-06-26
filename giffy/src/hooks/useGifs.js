import { useState, useEffect } from "react";

import getGifs from "../services/getGifs";

function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);

      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

      getGifs({ keyword: keywordToUse }).then((gif) => {
        setGifs(gif);
        setLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );

  return { loading, gifs };
}

export default useGifs;
