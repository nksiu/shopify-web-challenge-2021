import React, {Fragment, useState} from "react";
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

const MovieModal = ({movie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <button
        type="button" 
        class="btn btn-outline-info"
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
      </Modal>
    </Fragment>
  )
}

export default MovieModal;
