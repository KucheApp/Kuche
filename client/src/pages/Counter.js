import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";

const styles = {
  h1: {
    color: "white",
  }
}

class Counter extends Component {

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
            <h1 style={styles.h1}>Counter</h1>
            <p>Where your fruit ripens and commonly used items find their home</p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <Accordion />
        
      <Footer />
    </div>  
   
    );
  }
}

export default Counter;