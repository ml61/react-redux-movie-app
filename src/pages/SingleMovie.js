import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails, getAllGenres } from "../actions";

import Loading from "../components/Loading";
import Error from "../components/Error";
import GenresBar from "../components/GenresBar";
import IframePoster from "../components/IframePoster";
import SingleMovieDescription from "../components/SingleMovieDescription";
import TmdbRating from "../components/TmdbRating";
import FavouriteBtn from "../components/FavouriteButton";
import BackButton from "../components/BackButton";

const SingleMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const singleMovieDetails = useSelector((state) => state.singleMovieDetails);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getMovieDetails(id));
    // dispatch(getAllGenres());
  }, []);

  if (error) return <Error />;
  if (isLoading || !singleMovieDetails) return <Loading />;

  return (
    <div className="flex-container-movie">
      <GenresBar currentGenreId={null} />
      <IframePoster
        image={singleMovieDetails.image}
        trailer={singleMovieDetails.trailer}
      />
      <div className="description-section-container">
        <SingleMovieDescription
          {...singleMovieDetails}
          rating={singleMovieDetails.rating}
        />
      </div>
      <div className="rating-section-container ms-2">
        <TmdbRating rating={singleMovieDetails.rating} />
        <FavouriteBtn movie={singleMovieDetails} />
        <BackButton />
      </div>
    </div>
  );
};

export default SingleMovie;
