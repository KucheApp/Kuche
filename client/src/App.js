import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";

import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router className="router">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
