import React from "react";

const MovieInfo = ({movieInfo}) => {

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Plot</strong>: {movieInfo.Plot}
      </li>
      <li className="list-group-item">
        <strong>Genre</strong>: {movieInfo.Genre}
      </li>
      <li className="list-group-item">
        <strong>Director</strong>: {movieInfo.Director}
      </li>
      <li className="list-group-item">
        <strong>Actors</strong>: {movieInfo.Actors}
      </li>
      <li className="list-group-item">
        <strong>Rated</strong>: {movieInfo.Rated}
      </li>
      <li className="list-group-item">
        <strong>Released</strong>: {movieInfo.Released}
      </li>
      <li className="list-group-item">
        <strong>Runtime</strong>: {movieInfo.Runtime}
      </li>
    </ul>
  )
}

export default MovieInfo;
