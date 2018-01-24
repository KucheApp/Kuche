import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
// import AddFood from './AddFood';
import ModalAdd from "./Modal";


const styles = {
  h1: {
    color: "white",
    marginTop: "6rem",
    marginBottom: "3rem",
  }
}

const Counter = (props) => {
  // const counterItems = props.items.filter(item => item.location === "counter");

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

export default Counter;


