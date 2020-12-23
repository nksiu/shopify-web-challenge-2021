import {
  ADD_NOMINATION,
  REMOVE_NOMINATION,
  NOMINATION_LIMIT
} from "../actions/types";

const initialState = {
  nominations: [],
  nominationLimit: false
}

const nominationReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, action.payload]
      }
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter(nomination => nomination.imdbID !== action.payload)
      }
    case NOMINATION_LIMIT:
      return {
        ...state,
        nominationLimit: action.payload
      }
    default:
      return state;
  }
}

export default nominationReducer;
