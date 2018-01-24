import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import SuperCategory from './SuperCategory';

const styles = {
  h1: {
    color: "white",
    marginTop: "6rem",
    marginBottom: "3rem",
  }
}

class Fridge extends Component {

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
            <SuperCategory location="Fridge" />
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

export default Fridge;