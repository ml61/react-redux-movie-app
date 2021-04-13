import api from "../apis/axiosFetch";
import {
  api_key,
  AllGenresMinVoteCount,
  RandomMovieMinVoteCount,
} from "../constants";
import {
  GET_MOVIES,
  START_LOADING,
  FINISH_LOADING,
  ERROR_LOADING,
  GET_MOVIE_DETAILS,
  GET_ALL_GENRES,
  ADD_TO_FAVOURITE,
  DELETE_FROM_FAVOURITE,
  CURRENT_MOVIE_IS_FAVOURITE,
  CURRENT_MOVIE_IS_NOT_FAVOURITE,
  SET_CURRENT_GENRE_ID,
  CURRENT_PAGE,
  TOTAL_PAGES,
} from "./types";
import {
  formatMovieForCard,
  formatSingleMovieDetails,
} from "./helperFunctions";

export const getPopular = () => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await api.get("/movie/popular", { params: { api_key } });

    let data = response.data;
    let { results: movies } = data;
    const newPopular = movies.map((movie) => formatMovieForCard(movie));

    dispatch({ type: GET_MOVIES, payload: newPopular });
    dispatch({ type: ERROR_LOADING, payload: false });
    dispatch({ type: FINISH_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err.message });
    dispatch({ type: FINISH_LOADING });
  }
};

export const getMoviesOfGenre = (genreId, currentPage) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await api.get("/discover/movie", {
      params: {
        api_key,
        with_genres: genreId,
        page: currentPage,
        "vote_count.gte": AllGenresMinVoteCount,
      },
    });
    let { data } = response;
    dispatch({ type: TOTAL_PAGES, payload: data.total_pages });
    let { results: movies } = data;
    const newMoviesOfGenre = movies.map((movie) => formatMovieForCard(movie));

    dispatch({ type: GET_MOVIES, payload: newMoviesOfGenre });
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

export const changeCurrentPage = (currentPage) => {
  return { type: CURRENT_PAGE, payload: currentPage };
};

export const setCurrentGenreId = (genreId) => {
  return { type: SET_CURRENT_GENRE_ID, payload: genreId };
};
