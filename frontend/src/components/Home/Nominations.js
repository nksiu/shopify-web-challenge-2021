import React, { Fragment } from "react";
import {connect} from "react-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
import {Fade} from "react-reveal";
import Nomination from "./Nomination"

const Nominations = ({nominations}) => {
  return (
    <Fragment>
      <h3 className="h1.display-4 my-3">Nominations</h3>
      <ul className="list-group">
        <Fragment>
          {
            nominations.length ?
              <TransitionGroup>
                {
                  nominations.map((nomination) =>
                    <Fade key={nomination.imdbID} collapse bottom>
                      <Nomination nomination={nomination}/>
                    </Fade>
                  )
                }
              </TransitionGroup>
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
