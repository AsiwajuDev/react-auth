import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Component Links
import Home from "../src/Components/Home";
import Profile from "../src/Components/Profile";

function App() {
  return (
    <Router>
      <Route component={Home} />
      <Route component={Profile} />
    </Router>
  );
}

export default App;
