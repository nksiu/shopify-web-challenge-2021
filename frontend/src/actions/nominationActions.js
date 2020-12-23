import {ADD_NOMINATION, REMOVE_NOMINATION} from "../actions/types";

export const addNomination = (movie) => dispatch => {
  return dispatch({
    type: ADD_NOMINATION,
    payload: movie
  })
}
