import {
  GET_MOVIES
} from "../actions/types";

const initialState = {
  titleSearch: ""
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return {
        titleSearch: action.payload
      }
    default:
      return state;
  }
}

export default movieReducer;
