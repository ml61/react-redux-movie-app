import {
  GET_POPULAR,
  GET_MOVIE_DETAILS,
  GET_ALL_GENRES,
} from "../actions/types";

export const moviesReducer = (state = null, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return action.payload;

    default:
      // need this for default case
      return state;
  }
};

export const singleMovieReducer = (state = null, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return action.payload;

    default:
      // need this for default case
      return state;
  }
};

export const genresReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ALL_GENRES:
      return action.payload;
    default:
      return state;
  }
};
