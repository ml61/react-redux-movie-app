import React, { useEffect } from "react";

import IframePoster from "../components/IframePoster";
import SingleMovieDescription from "../components/SingleMovieDescription";
import TmdbRating from "../components/TmdbRating";
import FavouriteBtn from "../components/FavouriteButton";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails, getAllGenres } from "../actions";

import Loading from "../components/Loading";
import Error from "../components/Error";

const SingleMovieContainer = ({ movieId }) => {
  const dispatch = useDispatch();

  const singleMovieDetails = useSelector((state) => state.singleMovieDetails);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [movieId]);

  // useEffect(() => {
  //   dispatch(getMovieDetails(id));
  // }, []);

  if (error) return <Error />;
  if (isLoading || !singleMovieDetails) return <Loading />;

  return (
    <>
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
    </>
  );
};

export default SingleMovieContainer;
