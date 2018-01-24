import React, { Component } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import ModalAdd from './Modal';
import SuperCategory from './SuperCategory';
import shortid from "shortid";
import API from '../api';

const styles = {
  h1: {
    color: "white",
    marginTop: "6rem",
    marginBottom: "3rem",
  },
  jumbotron: {
    opacity: 0.0,
  }
}


class Freezer extends Component {
    
  state = {
    items: [],
  }

  handleUpdateItems = () => {
    API.GetFoodIn('freezer').then(response => {
      console.log(response)
      this.setState({items: response.fooditems})
    });
  }

  componentDidMount() {
    this.handleUpdateItems();
  }

  render(){
      return (
        <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Navigation />
          </div>
        </div>
      </div>

        <SuperCategory location="Freezer" />
        <Footer />

    </div>  
      );
    }
  }

export default Freezer;
