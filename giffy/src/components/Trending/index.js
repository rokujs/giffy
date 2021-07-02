import React, { Suspense, lazy } from "react";

import useNearScreen from "hooks/useNearScreen";
import Loader from "components/Loader";

const Trending = lazy(() => import("./TrendingSearches"));

function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "0px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Loader />}>
        {isNearScreen ? <Trending /> : <Loader />}
      </Suspense>
    </div>
  );
}

export default LazyTrending;
