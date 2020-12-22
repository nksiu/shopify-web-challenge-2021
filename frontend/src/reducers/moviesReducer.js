import {
  GET_MOVIE
} from "../actions/types";

const initialState = {
  movies: [],
  loading: true
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIE:
      return {
        movies: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
