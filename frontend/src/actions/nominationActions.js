import {ADD_NOMINATION, REMOVE_NOMINATION, NOMINATION_LIMIT} from "../actions/types";

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

export const limitNomination = (shouldLimit) => dispatch => {
  return dispatch({
    type: NOMINATION_LIMIT,
    payload: shouldLimit
  })
}
