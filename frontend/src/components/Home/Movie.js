import React from "react";
import {Button} from "@material-ui/core";

const Movie = ({movie}) => {
  return (
    <div className="card card-body mb-1">
      <div className="row">
        <div className="col-md-2">
          <img src={movie.Poster} alt="Movie Thumbnail" style={{display: "block", height: "auto", width: "80px", margin: "auto"}}/>
        </div>
        <div className="col-md-8">
          <h5>{movie.Title}</h5>
          <p>{movie.Year}</p>
        </div>
        <div className="col-md-2">
          <Button variant="outlined" color="primary">Nominate</Button>
        </div>
      </div>
    </div>
  )
}

export default Movie;