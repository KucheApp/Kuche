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

const Freezer = (props) => {
    const freezerItems = props.items.filter(item => item.location === 'freezer');

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
            <h1 style={styles.h1}>Freezer</h1>
            <p>Where you </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
        {/* <Accordion /> */}
        {freezerItems.map(item => {
          return (
            <Accordion removeItem={props.removeItem} name={item.name} />
          )
        })}
        <Footer />

    </div>  
   
    );
}

export default Freezer;