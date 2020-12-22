import React, {Fragment} from "react";
import {TextField} from "@material-ui/core";

const SearchBar = () => {

  return (
    <Fragment>
      <h1>The Shoppies</h1>
      <TextField label="Movie Title" variant="outlined" fullWidth/>
    </Fragment>
  )
}

export default SearchBar;