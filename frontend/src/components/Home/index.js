import React, {Fragment} from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import Nominations from "./Nominations";
import MovieNomWrapperSC from "./styling/movienom-wrapper-sc";

const HomePage = () => {

  return (
    <Fragment>
      <SearchBar />
      <MovieNomWrapperSC>
        <div className="container">
          <div className="movie-results">
            <Movies />
          </div>
          <div className="nomination-list">
            <Nominations />
          </div>
        </div>
      </MovieNomWrapperSC>
    </Fragment>
  )
}

export default HomePage;
