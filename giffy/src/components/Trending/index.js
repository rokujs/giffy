import React, { useState, useEffect } from "react";

import getTrending from "../../services/getTrendingGifs";
import Category from "../Category";

function Trending() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrending().then(setTrends);
  }, []);

  return <Category options={trends} />;
}

export default Trending;
