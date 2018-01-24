import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import shortid from "shortid";

const styles = {
  h1: {
    color: "white",
    marginTop: "6rem",
    marginBottom: "3rem",
  }
}

const freezerItems=[];

const Freezer = (props) => {
    // const freezerItems = props.items.filter(item => item.location === 'freezer');

    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Navigation />
          </div>
        </div>
      </div>
      <div style={styles.jumbotron} className="jumbotron"></div>	
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 style={styles.h1}>Freezer</h1>
            <p>Store frozen food such as meats, vegetables, and sweets.</p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div>
        {
          freezerItems.map(item => {
            return (
              <Accordion key={shortid()} id={shortid()} removeItem={props.removeItem} foodItem={item} />
            )
          })
        }
      </div>
    </div>
    );
}

export default Freezer;
