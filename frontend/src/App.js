import React, {Component} from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";

const client = new ApolloClient({
  uri: "/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" render={() => <Home/>}/>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
