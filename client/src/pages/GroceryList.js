import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import ModalAdd from './Modal';
import SuperCategory from './SuperCategory';
import API from '../api';
import shortid from 'shortid';

const styles = {
  h1: {
    color: "white",
    marginTop: '6rem',
    marginBottom: '3rem',
  },
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

        <SuperCategory location="Grocery List" />
        <Footer />

    </div>  
   
    );
  }
}

export default GroceryList;