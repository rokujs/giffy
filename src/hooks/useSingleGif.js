import { useState, useEffect } from "react";

import useGifs from "hooks/useGifs";
import getSingleGif from "services/getSingleGifs";

function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ id })
        .then((g) => {
          setGif(g);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);
  return { gif, isLoading, isError };
}

export default useSingleGif;
