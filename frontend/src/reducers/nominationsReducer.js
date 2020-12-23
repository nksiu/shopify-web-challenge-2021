import {
  ADD_NOMINATION,
  REMOVE_NOMINATION
} from "../actions/types";

const initialState = {
  nominations: []
}

const nominationReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOMINATION:
      return {
        nominations: [...state.nominations, action.payload]
      }
    case REMOVE_NOMINATION:
      return {
        nominations: state.nominations.filter(nomination => nomination.imdbID !== action.payload)
      }
    default:
      return state;
  }
}

export default nominationReducer;
