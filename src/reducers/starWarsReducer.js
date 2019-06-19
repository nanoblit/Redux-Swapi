import { SET_CHARACTERS, SET_FETCHING, FETCHING_FAILURE } from '../actions';

export const charsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
};

export const fetchingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return true;
    case SET_CHARACTERS:
      return false;
    case FETCHING_FAILURE:
      return false;
    default:
      return state;
  }
};

export const fetchingFailedReducer = (state = false, action) => {
  switch (action.type) {
    case FETCHING_FAILURE:
      return true;
    default:
      return state;
  }
};
