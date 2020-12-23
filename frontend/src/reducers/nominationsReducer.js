import {
  ADD_NOMINATION,
  REMOVE_NOMINATION,
  NOMINATION_LIMIT
} from "../actions/types";

const initialState = {
  nominations: JSON.parse(localStorage.getItem("movies")) || [],
  nominationLimit: false
}

const nominationReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOMINATION:
      const addMovies = [...state.nominations, action.payload];
      localStorage.setItem("movies", JSON.stringify(addMovies));
      return {
        ...state,
        nominations: addMovies
      }
    case REMOVE_NOMINATION:
      const removeMovies = state.nominations.filter(nomination => nomination.imdbID !== action.payload);
      localStorage.setItem("movies", JSON.stringify(removeMovies));
      return {
        ...state,
        nominations: removeMovies
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
