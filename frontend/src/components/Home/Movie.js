import React from "react";
import {connect} from "react-redux";
import {addNomination, limitNomination} from "../../actions/nominationActions";
import {Fade} from "react-reveal";
import MovieModal from "../MovieModal";

const nominationLimit = 5;

const Movie = ({movie, nominations, addNomination, limitNomination}) => {
  let inNom = false;
  for (let nomination of nominations) {
    if (nomination.imdbID === movie.imdbID) {
      inNom = true;
      break;
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (nominations.length < nominationLimit) {
      addNomination(movie);
    } else {
      limitNomination(true);
      setTimeout(() => {
        limitNomination(false)
      }, 3000)
    }
  }
  
  return (
    <Fade bottom>
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
            <div className="row align-items-start">
              <button
                type="button"
                className={`btn btn-outline-${inNom ? "secondary" : "success"}`}
                onClick={handleClick}
                disabled={inNom}
                style={{minWidth: "100px"}}
              >
                Nominate
              </button>
            </div>
            <div className="row align-items-end">
              <MovieModal movie={movie} nominations={nominations}/>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

const mapStateToProps = state => ({
  nominations: state.nominationList.nominations
});

export default connect(mapStateToProps, {addNomination, limitNomination})(Movie);