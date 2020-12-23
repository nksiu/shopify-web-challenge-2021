import React from "react";
import {connect} from "react-redux";
import {removeNomination} from "../../actions/nominationActions";
import {Fade} from "react-reveal";

const Nomination = ({nomination, removeNomination}) => {

  const handleClick = (e) => {
    e.preventDefault();
    removeNomination(nomination.imdbID);
  }

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-md-10">
          {nomination.Title} {(nomination.Year)}
        </div>
        <div className="col-md-2">
          <button
            data-id={nomination.imdbID}
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleClick}
          >
            -
          </button>
        </div>
      </div>
    </li>
  )
}

export default connect(null, {removeNomination})(Nomination);
