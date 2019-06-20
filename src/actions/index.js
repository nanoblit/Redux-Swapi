import axios from 'axios';

export const SET_CHARACTERS = 'FETCH_CHARACTERS';
export const SET_FETCHING = 'SET_FETCHING';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchCharacters = () => dispatch => {
  dispatch({ type: SET_FETCHING });
  axios
    .get('https://swapi.co/api/people/')
    .then(res => {
      dispatch({ type: SET_CHARACTERS, payload: res.data.results });
    })
    .catch(() => dispatch({ type: FETCHING_FAILURE }));
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
