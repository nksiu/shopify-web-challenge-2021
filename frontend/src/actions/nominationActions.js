import {ADD_NOMINATION, REMOVE_NOMINATION} from "../actions/types";

export const addNomination = (movie) => dispatch => {
  return dispatch({
    type: ADD_NOMINATION,
    payload: movie
  })
}

export const removeNomination = (movieId) => dispatch => {
  return dispatch({
    type: REMOVE_NOMINATION,
    payload: movieId
  })
}
