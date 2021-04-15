import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import GenresBar from "../components/GenresBar";
// import IframePoster from "../components/IframePoster";
// import SingleMovieDescription from "../components/SingleMovieDescription";
// import TmdbRating from "../components/TmdbRating";
// import FavouriteBtn from "../components/FavouriteButton";
// import BackButton from "../components/BackButton";
import SingleMovieContainer from "../components/SingleMovieContainer";

const SingleMovie = () => {
  const { id } = useParams();

  return (
    <div className="flex-container-movie">
      <GenresBar currentGenreId={null} />
      <SingleMovieContainer movieId={id} />
    </div>
  );
};

export default SingleMovie;
