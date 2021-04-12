import {
  ADD_TO_FAVOURITE,
  DELETE_FROM_FAVOURITE,
  CURRENT_MOVIE_IS_FAVOURITE,
  CURRENT_MOVIE_IS_NOT_FAVOURITE,
} from "../actions/types";

export const favouriteMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: {
      return [...state, action.payload];
    }
    case DELETE_FROM_FAVOURITE:
      return state.filter((movie) => movie.id !== action.payload.id);
    default:
      return state;
  }
};

export const isCurrentMovieInFavouriteReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_MOVIE_IS_FAVOURITE:
      return true;
    case CURRENT_MOVIE_IS_NOT_FAVOURITE:
      return false;
    default:
      return state;
  }
};
