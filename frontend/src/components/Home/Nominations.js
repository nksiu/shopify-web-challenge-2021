import React, { Fragment } from "react";
import {connect} from "react-redux";
import Nomination from "./Nomination"

const Nominations = ({nominations}) => {
  return (
    <Fragment>
      <h3 className="h1.display-4 my-3">Nominations</h3>
      <ul className="list-group">
        <Fragment>
          {
            nominations.length ?
              nominations.map((nomination) => <Nomination key={nomination.imdbID} nomination={nomination}/>)
            :
              null
          }
        </Fragment>
      </ul>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  nominations: state.nominationList.nominations
});

export default connect(mapStateToProps, null)(Nominations);
