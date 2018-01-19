import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";

import Landing from "./pages/Landing";
import Kitchen from "./pages/Kitchen";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    token: ""
  }

  enterApp = (state) => this.setState(state);

  exitApp = () => {
    this.setState({
      email: "",
      password: "",
      username: "",
      token: ""
    });
  }

  render() {
    const landing = () => (<Landing enterApp={this.enterApp} />);
    const kitchen = () => (<Kitchen state={this.state} exitApp={this.exitApp} />);
    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={landing} />
          <Route path="/kitchen" component={kitchen} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
