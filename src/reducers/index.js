import { combineReducers } from "redux";
import {
  moviesReducer,
  singleMovieReducer,
  genresReducer,
} from "./fetchReducers";
import {
  isLoadingReducer,
  errorReducer,
  currentPageReducer,
  totalPagesReducer,
  currentGenreIdReducer,
} from "./uiReducers";
import {
  favouriteMoviesReducer,
  isCurrentMovieInFavouriteReducer,
} from "./favouriteMoviesReducer";

import {
  randomMoviesFormReducer,
  randomMovieIdReducer,
} from "./randomMoviesReducer";
import { searchQueryReducer } from "./searchReducer";
// import { reducer as formReducer } from "redux-form";

export default combineReducers({
  movies: moviesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  singleMovieDetails: singleMovieReducer,
  allGenres: genresReducer,
  favouriteMovies: favouriteMoviesReducer,
  isCurrentMovieInFavourite: isCurrentMovieInFavouriteReducer,
  currentPage: currentPageReducer,
  totalPages: totalPagesReducer,
  currentGenreId: currentGenreIdReducer,
  randomMovieQueries: randomMoviesFormReducer,
  randomMovieId: randomMovieIdReducer,
  searchQuery: searchQueryReducer,
});
