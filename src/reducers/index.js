import { combineReducers } from "redux";
import {
  moviesReducer,
  singleMovieReducer,
  genresReducer,
} from "./fetchReducers";
import { isLoadingReducer, errorReducer } from "./uiReducers";
import {
  favouriteMoviesReducer,
  isCurrentMovieInFavouriteReducer,
} from "./favouriteMoviesReducer";
// import { reducer as formReducer } from "redux-form";

export default combineReducers({
  movies: moviesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  singleMovieDetails: singleMovieReducer,
  allGenres: genresReducer,
  favouriteMovies: favouriteMoviesReducer,
  isCurrentMovieInFavourite: isCurrentMovieInFavouriteReducer,
});
