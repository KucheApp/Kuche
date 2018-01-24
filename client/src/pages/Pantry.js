import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import SuperCategory from './SuperCategory';
import API from '../api';
import shortid from 'shortid';
import Push from './Push';

const styles = {
  h1: {
    color: "lightgrey",
    marginTop: "6rem",
    marginBottom: "3rem",
  }
}

let foodItem = {
  name: "collected from food form",
  location: "pantry",
  quanity: 0,
  purchaseDate: new Date().toLocaleTimeString(),
  expirationDate: "date",
}

class Pantry extends Component {

  state = {
    items: [],
  }

  handleUpdateItems = () => {
    API.GetFoodIn('pantry').then(response => {
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

        <SuperCategory location="Pantry" />
        <Footer />

    </div>  
   
    );
  }
}

export default Pantry;