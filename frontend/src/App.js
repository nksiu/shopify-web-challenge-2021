import React, {Component} from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import './App.css';
import Home from "./components/Home";

const client = new ApolloClient({
  uri: "/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <Home />
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
