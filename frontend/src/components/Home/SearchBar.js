import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {getMovies} from "../../actions/moviesActions";

const SearchBar = ({getMovies}) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      getMovies(title);
    }
  }

  return (
    <Fragment>
      <h1>The Shoppies</h1>
      <input 
        class="form-control form-control-lg"
        type="text"
        placeholder="Movie Title"
        id="inputLarge"
        onChange={handleChange}
        onKeyDown={onEnter}
      />
    </Fragment>
  )
}

export default connect(null, {getMovies})(SearchBar);