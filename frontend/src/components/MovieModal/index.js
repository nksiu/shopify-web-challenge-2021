import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {addNomination, limitNomination} from "../../actions/nominationActions";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import MovieInfo from "./MovieInfo";

const MOVIE_QUERY = gql`
  query MovieInfoType($imdbID: String!){
    movieInfo(imdbID: $imdbID){
      Rated,
      Released,
      Runtime,
      Genre,
      Plot,
      Actors,
      Director
    }
  }
`

const nominationLimit = 5;

const MovieModal = ({movie, nominations, addNomination, limitNomination}) => {
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
        limitNomination(false);
      }, 3000)
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <button
        type="button" 
        className="btn btn-outline-info"
        onClick={handleShow}
        style={{minWidth: "100px", marginTop: "30px"}}
      >
        Details
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{movie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Query query={MOVIE_QUERY} variables={{imdbID: movie.imdbID}}>
            {
              ({loading, error, data}) => {
                if (loading) return <Spinner className="mt-4" animation="border" variant="primary"/>
                if (error) console.log(error);

                return <Fragment>
                  {
                    data.movieInfo ?
                      <MovieInfo movieInfo={data.movieInfo}/>
                    :
                      <p>Woops, looks like additional info for this movie cannot be found</p>
                  }
                </Fragment>
              }
            }
          </Query>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className={`btn btn-outline-${inNom ? "secondary" : "success"}`}
            onClick={handleClick}
            disabled={inNom}
            style={{minWidth: "100px"}}
          >
            Nominate
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default connect(null, {addNomination, limitNomination})(MovieModal);
