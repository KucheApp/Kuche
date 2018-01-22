import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import API from '../api';
import shortid from 'shortid';

const styles = {
  h1: {
    color: "white",
  }
}

let foodItem = {
  name: "collected from food form",
  location: "freezer",
  quanity: 0,
  purchaseDate: new Date().toLocaleTimeString(),
  expirationDate: "date",
}

class GroceryList extends Component {

  state = {
    items: [],
  }

  handleUpdateItems = () => {
    API.GetFoodIn('grocery list').then(response => {
      console.log(response)
      this.setState({items: response.fooditems})
    })
  }

componentDidMount() {
  this.handleUpdateItems();
}

  render() {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 style={styles.h1}>GroceryList</h1>
            <p>The items you need to purchase</p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      {this.state.items.map(item => {
        return(
          <Accordion key={shortid()} id={item.id} name={item.name} location={item.location} />
        );
      })}

      <Footer />
    </div>  
   
    );
  }
}

export default GroceryList;