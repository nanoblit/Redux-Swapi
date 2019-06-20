import { combineReducers } from 'redux';
import { charsReducer, fetchingReducer, fetchingFailedReducer } from './starWarsReducer';

export default combineReducers({
  characters: charsReducer,
  fetching: fetchingReducer,
  fetchingFailed: fetchingFailedReducer,
});
