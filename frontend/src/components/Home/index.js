import React, {Fragment} from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import Nominations from "./Nominations";

const HomePage = () => {

  return (
    <Fragment>
        <div className="row">
          <div className="col-sm-1"/>
          <div className="col-sm-6 col-md-7">
            <SearchBar />
            <Movies />
          </div>
          <div className="col-md-3">
            <Nominations />
          </div>
          <div className="col-sm-1"/>
        </div>
    </Fragment>
  )
}

export default HomePage;
