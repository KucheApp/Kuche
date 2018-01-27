import React, { Component } from 'react';
import { Container, Row, Card, CardTitle, CardText } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import API from "../api";
import Accordion from "./Accordion";
import shortid from "shortid";

// Category Images
import FreezerImg from '../imgs/freezer.jpg';
import FridgeImg from '../imgs/fridge.png';
import PantryImg from '../imgs/pantry.jpg';
import CounterImg from '../imgs/countertop.png';

import styles from "./PageStyles";

let KitchenLink = ({to, imgSrc, altText}) => (
  <div className="col-6 col-md-3 p-2">
    <Card>
      <Link to={to}>
        <img className="card-img-top" src={imgSrc} alt={altText} />
        <span style={styles.linktext}>{altText}</span>
      </Link>
    </Card>
  </div>
);

class Kitchen extends Component {
  state = {
    expiringSoon: [],
    shouldLogOut: false
  };

  handleUpdateItems = () => {
    API.GetFoodExpiringSoon()
    .then(data => {
      // console.log(data);
      this.setState({expiringSoon: data.fooditems});
    })
    .catch(err => {
      this.setState({shouldLogOut: true});
    })
  }

  handleDeleteItem = (toDelete) => {
    API.DeleteFood(toDelete)
    .then(() => {
      let { expiringSoon } = this.state;
      expiringSoon = expiringSoon.filter(i => i.id !== toDelete.id);
      this.setState({expiringSoon: expiringSoon}, () => this.handleUpdateItems);
    })
  }

  componentDidMount() {
    this.handleUpdateItems();
  }

  render() {
    if (this.state.shouldLogOut) {
      return (<Redirect to="/" />);
    }
    return(
      <div>
        <div style={styles.pushDown} className="jumbotron"></div>
          <div className="container m-0 p-0">
            <div className="row m-0 p-1 justify-content-center">
              <KitchenLink to="/pantry"  imgSrc={PantryImg}  altText="Pantry" />
              <KitchenLink to="/counter" imgSrc={CounterImg} altText="Counter" />
              <KitchenLink to="/fridge"  imgSrc={FridgeImg}  altText="Fridge" />
              <KitchenLink to="/freezer" imgSrc={FreezerImg} altText="Freezer" />
            </div>
            {this.state.expiringSoon.length > 0? (
              <Container>
                <Row>
                  <Card style={styles.expire} body inverse color="danger">
                    <CardTitle>Items Expiring Soon!</CardTitle>
                    <CardText className="text-white">The following items are expiring soon: </CardText>
                    {this.state.expiringSoon.map(item => {
                      return (<Accordion key={shortid()} foodItem={item} handleDelete={this.handleDeleteItem} />);
                    })}
                  </Card>
                </Row>
              </Container>
            ):(
              <Container>
                <Row>
                  <Card style={styles.expire} body inverse color="success">
                    <CardTitle>No Food is Expiring Soon!</CardTitle>
                    <CardText style={{color: "white"}}>Looks like all of your food is fresh. Nice!</CardText>
                  </Card>
                </Row>
              </Container>
            )}
         </div>
        </div>
      );
   }
}

export default Kitchen;
