import React from "react";
import {connect} from "react-redux";
import {removeNomination} from "../../actions/nominationActions";

const Nomination = ({nomination, removeNomination}) => {

  const handleClick = (e) => {
    e.preventDefault();
    removeNomination(nomination.imdbID);
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-10 align-self-center">
          <p>
            {nomination.Title} ({nomination.Year})
          </p>
        </div>
        <div className="col-md-2 align-self-center">
          <button 
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
