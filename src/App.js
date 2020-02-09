import React, { Component } from "react";
import { Route } from "react-router-dom";

//Component Links
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Nav from "./Components/Nav";
import Auth from "./Auth/Auth";
import Callback from "./Components/Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}

export default App;
