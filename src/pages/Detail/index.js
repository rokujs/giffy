import React from "react";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Loader from "components/Loader";

function Detail({ params }) {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif({ id });
  console.log(isLoading);

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Loader />
      </>
    );
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{gif.title} | giffy</title>
      </Helmet>
      <Gif {...gif} />{" "}
    </>
  );
}

export default Detail;
