import { START_LOADING, FINISH_LOADING, ERROR_LOADING } from "../actions/types";

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
