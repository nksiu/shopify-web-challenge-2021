import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {TextField} from "@material-ui/core";
import {getMovies} from "../../actions/moviesActions";

const SearchBar = ({getMovies}) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      console.log(title);
      getMovies(title);
    }
  }

  return (
    <Fragment>
      <h1>The Shoppies</h1>
      <TextField 
        label="Movie Title"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        onKeyDown={onEnter}
      />
    </Fragment>
  )
}

export default connect(null, {getMovies})(SearchBar);