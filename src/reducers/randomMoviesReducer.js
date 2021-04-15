import {
  SET_RANDOM_MOVIE_QUERIES,
  SET_RANDOM_MOVIE_ID,
} from "../actions/types";

export const randomMoviesFormReducer = (state = null, action) => {
  switch (action.type) {
    case SET_RANDOM_MOVIE_QUERIES:
      return action.payload;

    default:
      return state;
  }
};

export const randomMovieIdReducer = (state = 522627, action) => {
  switch (action.type) {
    case SET_RANDOM_MOVIE_ID:
      return action.payload;
    default:
      return state;
  }
};
