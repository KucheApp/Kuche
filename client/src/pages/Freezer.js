import React, { Component } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import ModalAdd from './Modal';
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
              <Navigation />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h1 style={styles.h1}>Freezer</h1>
              <p>Where your fruit ripens and commonly used items find their home</p>
            </div>
            <div className="col-2"></div>
          </div>
        </div>

        <ModalAdd />

        <Footer />
    </div>  
      );
    }
  }

export default Freezer;
