import React, {Fragment} from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";

const HomePage = () => {

  return (
    <Fragment>
      <SearchBar />
      <Movies />
    </Fragment>
  )
}

export default HomePage;
