import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import "./App.css";

import Landing from "./pages/Landing";

import NoMatch from "./pages/NoMatch";
import Counter from "./pages/Counter";
import Fridge from "./pages/Fridge";
import Freezer from "./pages/Freezer";
import Pantry from "./pages/Pantry";
import GroceryList from "./pages/GroceryList";
import Main from './bootstrap/Jumbotron';
import Navigation from './bootstrap/Navigation';


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
    
    const counter = () => (<Counter state={this.state} exitApp={this.exitApp} />);
    const fridge = () => (<Fridge state={this.state} exitApp={this.exitApp} />);
    const freezer = () => (<Freezer state={this.state} exitApp={this.exitApp} />);
    const pantry = () => (<Pantry state={this.state} exitApp={this.exitApp} />);
    const grocerylist = () => (<GroceryList state={this.state} exitApp={this.exitApp} />);

    const jumbotron = () => (<Main state={this.state} exitApp={this.exitApp}/>);
    
    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={landing} />
        
          <Route path="/counter" component={Counter} />
          <Route path="/fridge" component={Fridge} />
          <Route path="/freezer" component={Freezer} />
          <Route path="/pantry" component={Pantry} />
          <Route path="/grocerylist" component={GroceryList} />
          <Route path="/jumbotron" component={Main} />
        
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
