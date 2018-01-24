import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import shortid from 'shortid';

import API from "./api";

import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Counter from "./pages/Counter";
import Fridge from "./pages/Fridge";
import Freezer from "./pages/Freezer";
import Pantry from "./pages/Pantry";
import GroceryList from "./pages/GroceryList";
import Main from './pages/Main';
import Navigation from './pages/Navigation';
import APITest from "./pages/Ajax";
import Push from './pages/Push';

class App extends Component {

  state = {
    email: "",
    password: "",
    username: "",
    token: "",
    shouldExitApp: false
  }

  enterApp = (state) => this.setState(state);

  exitApp = () => {
    API.LogOut();
    this.setState({
      email: "",
      password: "",
      username: "",
      token: "",
      shouldExitApp: true
    });
  }

  render() {
    const Landing = () => (<Landing enterApp={this.enterApp} />);
    const CounterWithProps = () => (<Counter state={this.state} removeItem={this.removeItem} exitApp={this.exitApp} />);
    const FridgeWithProps = () => (<Fridge state={this.state} removeItem={this.removeItem} exitApp={this.exitApp} />);
    const FreezerWithProps = () => <Freezer items={this.state.items} removeItem={this.removeItem} exitApp={this.exitApp} />;
    const PantryWithProps = () => (<Pantry state={this.state} removeItems={this.removeItem} exitApp={this.exitApp} />);
    const GroceryListWithProps = () => (<GroceryList state={this.state} removeItems={this.removeItem} exitApp={this.exitApp} />);
    const PushWithProps = () => (<Push state={this.state} addItem={this.addItem} exitApp={this.exitApp}/>);

    const main = () => (<Main state={this.state} exitApp={this.exitApp}/>);

    if (this.state.shouldExitApp) {
      this.setState({shouldExitApp: false})
      return (<Redirect to="/" />);
    }

    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/counter" component={CounterWithProps} />
          <Route path="/fridge" component={FridgeWithProps} />
          <Route path="/freezer" component={FreezerWithProps} />
          <Route path="/pantry" component={PantryWithProps} />
          <Route path="/grocerylist" component={GroceryListWithProps} />
          <Route path="/kitchen" component={Main} />
          <Route path="/ajax" component={APITest} />
          <Route path="/push" component={PushWithProps} />;

          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
