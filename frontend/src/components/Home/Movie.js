import React from "react";

const Movie = ({movie}) => {
  return (
    <div className="card card-body mb-1">
      {/* <div className="row"> */}
        {/* <div className="col-md-9"> */}
          <p>{movie.Title}</p>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default Movie;