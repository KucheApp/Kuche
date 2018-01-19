import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import "./App.css";

import Landing from "./pages/Landing";

import NoMatch from "./pages/NoMatch";
import Counter from "./pages/Counter";
import Fridge from "./pages/Fridge";
import Freezer from "./pages/Freezer";
import Pantry from "./pages/Pantry";
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
    
    const counter = () => (<Counter state={this.state} exitApp={this.exitApp} />);
    const fridge = () => (<Fridge state={this.state} exitApp={this.exitApp} />);
    const freezer = () => (<Freezer state={this.state} exitApp={this.exitApp} />);
    const pantry = () => (<Pantry state={this.state} exitApp={this.exitApp} />);
    const drawer = () =>  (<Drawer state={this.state} exitApp={this.exitApp}/>);
    const jumbotron = () => (<Jumbotron state={this.state} exitApp={this.exitApp}/>);
    const navbar = () => (<Navbar state={this.state} exitApp={this.exitApp} />)
    
    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={landing} />
        
          <Route path="/counter" component={Counter} />
          <Route path="/fridge" component={Fridge} />
          <Route path="/freezer" component={Freezer} />
          <Route path="/pantry" component={Pantry} />
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
