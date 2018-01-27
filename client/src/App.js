import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Main from './pages/Main';
import SuperCategory from "./pages/SuperCategory";
import GroceryList from "./pages/GroceryList";
import Account from "./pages/Account";

class App extends Component {

  render() {
    const pantry    = () => (<SuperCategory location="Pantry" />);
    const counter   = () => (<SuperCategory location="Counter" />);
    const fridge    = () => (<SuperCategory location="Fridge" />);
    const freezer   = () => (<SuperCategory location="Freezer" />);
    const groceries = () => (<GroceryList   location="Grocery List" />);
    const account   = () => (<Account />);

    return (
      <Router className="router">
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/kitchen" component={Main} />
          <Route path="/pantry" component={pantry} />
          <Route path="/counter" component={counter} />
          <Route path="/fridge" component={fridge} />
          <Route path="/freezer" component={freezer} />
          <Route path="/grocerylist" component={groceries} />
          <Route path="/account" component={account} />

          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
