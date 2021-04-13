import {
  START_LOADING,
  FINISH_LOADING,
  ERROR_LOADING,
  CURRENT_PAGE,
  SET_CURRENT_GENRE_ID,
  TOTAL_PAGES,
} from "../actions/types";

export const isLoadingReducer = (state = Boolean, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case FINISH_LOADING:
      return false;
    default:
      // need this for default case
      return state;
  }
};

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case ERROR_LOADING:
      return action.payload;
    default:
      // need this for default case
      return state;
  }
};

export const currentPageReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export const currentGenreIdReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_GENRE_ID:
      return action.payload;
    default:
      return state;
  }
};

export const totalPagesReducer = (state = null, action) => {
  switch (action.type) {
    case TOTAL_PAGES:
      return action.payload;
    default:
      return state;
  }
};
