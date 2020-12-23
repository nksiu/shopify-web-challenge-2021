import React, { Fragment } from "react";
import {connect} from "react-redux";
import Nomination from "./Nomination";

const Nominations = ({nominations}) => {
  return (
    <Fragment>
      <h3 className="h1.display-4 my-3">Nominations</h3>
      <ul className="list-group">
        {
          nominations.map((nomination) => 
            <Nomination key={nomination.imdbID} nomination={nomination}/>
          )
        }
      </ul>
      <small id="emailHelp" className="form-text text-muted">
        Nomination Count: {nominations.length}
      </small>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  nominations: state.nominationList.nominations
});

export default connect(mapStateToProps, null)(Nominations);
