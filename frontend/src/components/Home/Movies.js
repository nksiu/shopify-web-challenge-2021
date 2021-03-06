import React, {Fragment} from "react";
import {connect} from "react-redux";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Movie from "./Movie";
import Spinner from "react-bootstrap/Spinner";

const MOVIES_QUERY = gql`
  query GraphQLList($searchTitle: String!){
    movies(searchTitle: $searchTitle){
      Title,
      Year,
      imdbID,
      Poster
    }
  }
`

const Movies = ({movieList}) => {
  return (
    <Fragment>
      {
        movieList.titleSearch ?
        <Fragment>
          <Query query={MOVIES_QUERY} variables={{searchTitle: movieList.titleSearch}}>
              {
                ({loading, error, data}) => {
                  if (loading) return <Spinner className="mt-4" animation="border" variant="primary"/>
                  if (error) console.log(error);

                  return <Fragment>
                    <h4 className="h1.display-4 my-3">
                      Results for "{movieList.titleSearch}"
                      {
                        data.movies ?
                          <span>
                            <small className="form-text text-muted">
                              Matched with: {data.movies.length} movies
                            </small>
                          </span>
                        :
                          null
                      }
                    </h4>
                    {
                      data.movies ?
                        data.movies.map(movie => (
                          <Movie key={movie.imdbID} movie={movie} />
                        )
                      )
                    :
                      <p>Looks like there's no results...</p>
                    }
                  </Fragment>
                }
              }
            </Query>
          </Fragment>
        :
        null
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  movieList: state.movieList
});

export default connect(mapStateToProps, null)(Movies);
