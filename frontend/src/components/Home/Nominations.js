import React, { Fragment } from "react";
import {connect} from "react-redux";
import Nomination from "./Nomination";

const Nominations = ({nominations}) => {
  return (
    <Fragment>
      <h3 className="h1.display-4 my-3">
        Nominations
        <span>
          <small className="form-text text-muted" style={{fontSize: "1rem"}}>
            Limit 5
          </small>
        </span>
      </h3>
      <ul className="list-group">
        {
          nominations.map((nomination) => 
            <Nomination key={nomination.imdbID} nomination={nomination}/>
          )
        }
      </ul>
      <small className="form-text text-muted">
        Nomination Count: <strong>{nominations.length} out of 5</strong>
      </small>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  nominations: state.nominationList.nominations
});

export default connect(mapStateToProps, null)(Nominations);
