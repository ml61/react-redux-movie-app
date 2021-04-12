import api from "../apis/axiosFetch";
import { api_key } from "../constants";
import { popularPath } from "../constants";
import {
  GET_POPULAR,
  START_LOADING,
  FINISH_LOADING,
  ERROR_LOADING,
  GET_MOVIE_DETAILS,
  GET_ALL_GENRES,
  ADD_TO_FAVOURITE,
  DELETE_FROM_FAVOURITE,
  CURRENT_MOVIE_IS_FAVOURITE,
  CURRENT_MOVIE_IS_NOT_FAVOURITE,
} from "./types";
import {
  formatMovieForCard,
  formatSingleMovieDetails,
} from "./helperFunctions";

export const getPopular = () => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await api.get(popularPath, { params: { api_key } });

    let data = response.data;
    let { results: movies } = data;
    const newPopular = movies.map((movie) => formatMovieForCard(movie));

    dispatch({ type: GET_POPULAR, payload: newPopular });
    dispatch({ type: ERROR_LOADING, payload: false });
    dispatch({ type: FINISH_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err.message });
    dispatch({ type: FINISH_LOADING });
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const responseDetails = await api.get(`/movie/${id}`, {
      params: { api_key },
    });
    const responseVideos = await api.get(`/movie/${id}/videos`, {
      params: { api_key },
    });
    const responseCredits = await api.get(`/movie/${id}/credits`, {
      params: { api_key },
    });

    const movieDetails = formatSingleMovieDetails({
      ...responseDetails.data,
      ...responseVideos.data,
      ...responseCredits.data,
      id,
    });

    dispatch({ type: GET_MOVIE_DETAILS, payload: movieDetails });
    dispatch({ type: ERROR_LOADING, payload: false });
    dispatch({ type: FINISH_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err.message });
  }
};

export const getAllGenres = () => async (dispatch) => {
  try {
    const response = await api.get(`/genre/movie/list`, {
      params: { api_key },
    });
    dispatch({ type: GET_ALL_GENRES, payload: response.data });
    dispatch({ type: ERROR_LOADING, payload: false });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err.message });
  }
};

export const changeFavouriteMovies = (
  movie,
  isCurrentMovieInFavouriteState
) => {
  return isCurrentMovieInFavouriteState
    ? { type: DELETE_FROM_FAVOURITE, payload: movie }
    : { type: ADD_TO_FAVOURITE, payload: movie };
};

export const isCurrentMovieInFavourite = (movie, favouriteMovies) => {
  let isCurrentMovieInFavourite = favouriteMovies
    .map((favouriteMovie) => favouriteMovie.id)
    .includes(movie.id);
  return isCurrentMovieInFavourite
    ? { type: CURRENT_MOVIE_IS_FAVOURITE }
    : { type: CURRENT_MOVIE_IS_NOT_FAVOURITE };
};
