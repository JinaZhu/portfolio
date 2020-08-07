import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Project from "./Project";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/portfolio/" component={Homepage} />
          <Route path="/portfolio/project" component={Project} />
          <Route path="/portfolio/aboutme" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
