import React, {useState} from "react";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import {addNomination} from "../../actions/nominationActions";

const nominationLimit = 5;

const Movie = ({movie, nominations, addNomination}) => {
  const [isDisabled, setDisabled] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (nominations.length < nominationLimit) {
      setDisabled(true);
      addNomination(movie);
    }
  }
  
  return (
    <div className="card card-body mb-1">
      <div className="row">
        <div className="col-md-2">
          <img src={movie.Poster} alt="Movie Thumbnail" style={{display: "block", height: "auto", width: "80px", margin: "auto"}}/>
        </div>
        <div className="col-md-8">
          <h5>{movie.Title}</h5>
          <p>{movie.Year}</p>
        </div>
        <div className="col-md-2">
          <Button
            onClick={handleClick}
            disabled={isDisabled}
            variant="outlined"
            color="primary"
          >
              Nominate
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  nominations: state.nominationList.nominations
});

export default connect(mapStateToProps, {addNomination})(Movie);