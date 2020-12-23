import React, {Fragment} from "react";
import {connect} from "react-redux";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Movie from "./Movie";
import {CircularProgress} from "@material-ui/core";

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
          <h4 className="h1.display-4 my-3">Results for "{movieList.titleSearch}"</h4>
          <Query query={MOVIES_QUERY} variables={{searchTitle: movieList.titleSearch}}>
              {
                ({loading, error, data}) => {
                  if (loading) return <CircularProgress />
                  if (error) console.log(error);

                  return <Fragment>
                    {
                      data.movies ?
                        data.movies.map(movie => (
                          <Movie key={movie.imdbID} movie={movie} />
                        ))
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
