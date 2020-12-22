import {GET_MOVIES} from "../actions/types";

export const getMovies = (searchTitle) => dispatch => {
  return dispatch({
    type: GET_MOVIES,
    payload: searchTitle
  });
}
