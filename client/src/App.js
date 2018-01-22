import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import shortid from 'shortid';

// import "./App.css";

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



class App extends Component {

  state = {
    email: "",
    password: "",
    username: "",
    token: "",
    items: [{location: 'freezer', name: 'pizza'}, {location: 'freezer', name: 'Chocolate Chips'}, {location: 'pantry', name: 'Peanut Butter'}, {location: "freezer", name: "ice cream"}],
    id: shortid()
  }

  removeItem = (name) => {
    this.setState({
      items: this.state.items.filter((item) => item.name !== name)
    })
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

    const CounterWithProps = () => (<Counter state={this.state} removeItem={this.removeItem} exitApp={this.exitApp} />);
    const FridgeWithProps = () => (<Fridge state={this.state} removeItem={this.removeItem} exitApp={this.exitApp} />);
    const FreezerWithProps = () => <Freezer items={this.state.items} removeItem={this.removeItem} exitApp={this.exitApp} />;
    const PantryWithProps = () => (<Pantry state={this.state} removeItems={this.removeItem} exitApp={this.exitApp} />);
    const GroceryListWithProps = () => (<GroceryList state={this.state} removeItems={this.removeItem} exitApp={this.exitApp} />);

    const main = () => (<Main state={this.state} exitApp={this.exitApp}/>);

    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={landing} />

          <Route path="/counter" component={CounterWithProps} />
          <Route path="/fridge" component={FridgeWithProps} />
          <Route path="/freezer" component={FreezerWithProps} />
          <Route path="/pantry" component={PantryWithProps} />
          <Route path="/grocerylist" component={GroceryListWithProps} />
          <Route path="/kitchen" component={Main} />
          <Route path="/ajax" component={APITest} />

          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
