import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import shortid from 'shortid';

// import "./App.css";

import Landing from "./pages/Landing";

import NoMatch from "./pages/NoMatch";
import Main from './pages/Main';
import Navigation from './pages/Navigation';
import APITest from "./pages/Ajax";
import Push from './pages/Push';
import SuperCategory from "./pages/SuperCategory";

class App extends Component {

  state = {
    email: "",
    password: "",
    username: "",
    token: ""
  }

  addItem = this.addItem.bind(this);

  // removeItem = (name) => {
  //   this.setState({
  //     items: this.state.items.filter((item) => item.name !== name)
  //   })
  // }

  addItem() {
    this.setState({
      testItems: this.state.testItems.concat("new"),
    }, () => {
      console.log(this.state.testItems)
    });

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
    const main = () => (<Main state={this.state} exitApp={this.exitApp}/>);

    const pantry    = () => (<SuperCategory location="Pantry" />);
    const counter   = () => (<SuperCategory location="Counter" />);
    const fridge    = () => (<SuperCategory location="Fridge" />);
    const freezer   = () => (<SuperCategory location="Freezer" />);
    const groceries = () => (<SuperCategory location="Grocery List" />);

    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={landing} />

          <Route path="/kitchen" component={Main} />
          <Route path="/pantry" component={pantry} />
          <Route path="/counter" component={counter} />
          <Route path="/fridge" component={fridge} />
          <Route path="/freezer" component={freezer} />
          <Route path="/grocerylist" component={groceries} />

          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
