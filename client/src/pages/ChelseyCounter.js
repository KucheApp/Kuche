import React, { Component } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
// import AddFood from './AddFood';
import ModalAdd from "./Modal";
import API from '../api';
import shortid from 'shortid';


const styles = {
  h1: {
    color: "white",
    marginTop: "6rem",
    marginBottom: "3rem",
  }
}

class Counter extends Component {

  state={
    items: [],
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
            <h1 style={styles.h1}>Counter</h1>
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

export default Counter;


