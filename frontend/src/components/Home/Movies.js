import React, {Fragment} from "react";
import {connect} from "react-redux";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Movie from "./Movie";

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
  console.log(movieList);
  return (
    <Fragment>
      {
        movieList.titleSearch ?
        <Fragment>
          <h2 className="h1.display-4 my-3">Results for "{movieList.titleSearch}"</h2>
          <Query query={MOVIES_QUERY} variables={{searchTitle: movieList.titleSearch}}>
              {
                ({loading, error, data}) => {
                  if (loading) return <h4>Loading...</h4>
                  if (error) console.log(error);
                  console.log(data);

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
