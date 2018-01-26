import React, { Component } from 'react';
import { Container, Row, Card, CardTitle, CardText, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import API from "../api";
import Accordion from "./Accordion";
import shortid from "shortid";


//Category Images
import FreezerImg from '../imgs/freezer.jpg';
import FridgeImg from '../imgs/fridge.png';
import PantryImg from '../imgs/pantry.jpg';
import CounterImg from '../imgs/countertop.png';

const styles = {
   column : {
      minHeight: '350px',
      maxHeight: '500px',
      minWidth: '350px',
      maxWidth: '500px',
  },
  pushDown: {
    opacity: "0.0",
    height: "0px"
  },
  expire: {
    marginTop: "2rem",
    marginBottom: "2rem"
  },
  linktext: {
    position: "absolute",
    width: "100%",
    bottom: "0px",
    left: 0,
    color: "white",
    fontSize: "40px",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "0px 0px 3px 3px"
  }
}

const page = "Kitchen";

let KitchenLink = ({to, imgSrc, altText}) => (
  <div className="col-6 col-md-3 p-2">
    <div className="card">
      <Link to={to}>
        <img className="card-img-top" src={imgSrc} alt={altText} />
        <span style={styles.linktext}>{altText}</span>
      </Link>
    </div>
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
      console.log(data);
      this.setState({expiringSoon: data.fooditems});
    })
    .catch(err => {
      this.setState({shouldLogOut: true});
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
              <KitchenLink to="/Pantry"  imgSrc={PantryImg}  altText="Pantry" />
              <KitchenLink to="/Counter" imgSrc={CounterImg} altText="Counter" />
              <KitchenLink to="/Fridge"  imgSrc={FridgeImg}  altText="Fridge" />
              <KitchenLink to="/Freezer" imgSrc={FreezerImg} altText="Freezer" />
            </div>
            {this.state.expiringSoon.length > 0? (
              <Container>
                <Row>
                  <Card style={styles.expire} body inverse color="danger">
                    <CardTitle>Items Expiring Soon!</CardTitle>
                    <CardText>The following items are expiring soon: </CardText>
                    {this.state.expiringSoon.map(item => {
                         return(
                          <Accordion key={shortid()} id={item.id} foodItem={item} />
                         );
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
