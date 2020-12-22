import {combineReducers} from "redux";
import moviesReducer from "./moviesReducer";
import nominationsReducer from "./nominationsReducer";

export default combineReducers({
  movieList: moviesReducer,
  nominationList: nominationsReducer
});
