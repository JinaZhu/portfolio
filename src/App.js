import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Project from "./Project";
import AboutMe from "./AboutMe";
import SeasonProvider from "./Providers/Season";

function App() {
  return (
    <SeasonProvider>
      <HashRouter basename="/">
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={AboutMe} />
        </div>
      </HashRouter>
    </SeasonProvider>
  );
}

export default App;
