import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Fade} from "react-reveal";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import Nominations from "./Nominations";
import {limitNomination} from "../../actions/nominationActions";

const HomePage = ({shouldLimit, limitNomination}) => {

  const handleDismiss = (e) => {
    e.preventDefault();
    limitNomination(false);
  }

  return (
    <Fragment>
      {
        shouldLimit ?
          <Fade top>
            <div className="alert alert-dismissible alert-warning" style={{position: "fixed", marginLeft: "40%", zIndex: 100}}>
              <button type="button" className="close" data-dismiss="alert" onClick={handleDismiss}>&times;</button>
              You can only have 5 nominations
            </div>
          </Fade>
        :
          null
      }
      <div className="row">
        <div className="col-sm-1"/>
        <div className="col-sm-6 col-md-7">
          <SearchBar />
          <Movies />
        </div>
        <div className="col-md-3">
          <Nominations />
        </div>
        <div className="col-sm-1"/>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  shouldLimit: state.nominationList.nominationLimit
});

export default connect(mapStateToProps, {limitNomination})(HomePage);
