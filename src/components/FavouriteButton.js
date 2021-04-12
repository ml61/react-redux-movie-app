import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFavouriteMovies,
  isCurrentMovieInFavourite,
} from "../actions/index";

const FavouriteBtn = ({ movie }) => {
  const dispatch = useDispatch();
  const favouriteMovies = useSelector((state) => state.favouriteMovies);
  const isCurrentMovieInFavouriteState = useSelector(
    (state) => state.isCurrentMovieInFavourite
  );

  useEffect(() => {
    dispatch(isCurrentMovieInFavourite(movie, favouriteMovies));
  }, [favouriteMovies]);

  return (
    <button
      type="button"
      className="btn btn-dark p-3"
      onClick={() =>
        dispatch(changeFavouriteMovies(movie, isCurrentMovieInFavouriteState))
      }
    >
      {isCurrentMovieInFavouriteState ? "Delete" : "Favourite"}
    </button>
  );
};

export default FavouriteBtn;
