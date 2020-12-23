import React, { Fragment } from "react";
import {connect} from "react-redux";
import Nomination from "./Nomination"

const Nominations = ({nominations}) => {
  return (
    <Fragment>
      <h2 className="h1.display-4 my-3">Nominations</h2>
      <ul className="list-group">
        <Fragment>
          {
            nominations.length ?
              nominations.map((nomination) => <Nomination nomination={nomination}/>)
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
