import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import "./App.css";

import Landing from "./pages/Landing";
import Kitchen from "./pages/Kitchen";
import NoMatch from "./pages/NoMatch";
import Counter from "./pages/Counter";
import Drawer from './pages/Drawer';
import Jumbotron from './bootstrap/Jumbotron';
import Navbar from './bootstrap/Navbar';

class App extends Component {
   
  state = {
    username: "",
    password: "",
    token: ""
  }

  enterApp = (username, password) => {
    this.setState({
      username: username,
      password: password
    });
  }

  exitApp = () => {
    this.setState({
      username: "",
      password: "",
      token: ""
    });
  }

  render() {
    const landing = () => (<Landing enterApp={this.enterApp} />);
    const kitchen = () => (<Kitchen state={this.state} exitApp={this.exitApp} />);
    const counter = () => (<Counter state={this.state} exitApp={this.exitApp} />);
    const drawer = () =>  (<Drawer state={this.state} exitApp={this.exitApp}/>);
    const jumbotron = () => (<Jumbotron state={this.state} exitApp={this.exitApp}/>);
    const navbar = () => (<Navbar state={this.state} exitApp={this.exitApp} />)
    
    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={landing} />
          <Route path="/kitchen" component={kitchen} />
          <Route path="/counter" component={counter} />
          <Route path="/drawer" component={Drawer} />
          <Route path="/jumbotron" component={Jumbotron} />
          <Route path="/sidenav" component={Navbar} />
        
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
