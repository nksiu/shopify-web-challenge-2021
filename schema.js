const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const axios = require("axios");
require('dotenv').config()

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    Title: {type: GraphQLString},
    Year: {type: GraphQLString},
    imdbID: {type: GraphQLString},
    Poster: {type: GraphQLString}
  })
});

const MovieInfoType = new GraphQLObjectType({
  name: "MovieInfo",
  fields: () => ({
    Rated: {type: GraphQLString},
    Released: {type: GraphQLString},
    Runtime: {type: GraphQLString},
    Genre: {type: GraphQLString},
    Plot: {type: GraphQLString},
    Actors: {type: GraphQLString},
    Director: {type: GraphQLString}
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movies: {
      type: new GraphQLList(MovieType),
      args: {
        searchTitle: {type: GraphQLString}
      },
      resolve(parent, args) {
        return axios.get(`http://www.omdbapi.com/?s=${args.searchTitle}&apikey=${process.env.API_KEY}&type=movie`)
          .then(res => res.data.Search)
      }
    },

    movieInfo: {
      type: MovieInfoType,
      args: {
        imdbID: {type: GraphQLString}
      },
      resolve(parent, args) {
        return axios.get(`http://www.omdbapi.com/?i=${args.imdbID}&apikey=${process.env.API_KEY}`)
          .then(res => res.data)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
