import React, { Component } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
// import AddFood from './AddFood';
import ModalAdd from "./Modal";
import SuperCategory from './SuperCategory';
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
          <div className="col-3">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">

            <SuperCategory location="Counter" />
          </div>
          <div className="col-2 justify-content-center"></div>
          <div>
          </div>
        </div>
      </div>
        <Footer />

    </div>  
   
    );
  }
}

export default Counter;