import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';
import API from '../api';

import styles from './PageStyles';
import Navigation from './Navigation';
import Accordion from "./Accordion";
import ModalAdd from './Modal';
import Footer from './Footer';

class SuperCategory extends Component {
   state = {
      items: [],
      shouldLogOut: false
   }

   handleUpdateItems = () => {
      API.GetFoodIn(this.props.location)
      .then(response => {
         // console.log(response)
         this.setState({items: response.fooditems})
      })
      .catch(err => {
        this.setState({shouldLogOut: true})
      })
   }

   handleNewFood = (newFood) => {
     let fooditems = this.state.items;
     fooditems.push(newFood);
     this.handleUpdateItems();
   }

   handleUpdateFood = (toUpdate) => {
     API.UpdateFood(toUpdate)
     .then(() => {
       this.handleUpdateItems();
     })
     .catch(err => {
       this.setState({shouldLogOut: true})
     })
   }

   handleDeleteFood = (toDelete) => {
     API.DeleteFood(toDelete)
     .then(() => {
       let { items } = this.state;
       items = items.filter(i => i.id !== toDelete.id);
       this.setState({items: items}, () => this.handleUpdateItems());
     })
     .catch(err => {
       this.setState({shouldLogOut: true})
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
        <Container>
          <Row>
            <Navigation />
          </Row>

          <Row>
             <Col xs={{size: 12, offset: 0}} sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}}>
                <h1 style={styles.h1}>{this.props.location}</h1>
                <ModalAdd location={this.props.location} handleNewFood={this.handleNewFood} />
                {this.state.items.map(item => {
                  return(<Accordion key={shortid()} foodItem={item} handleUpdate={this.handleUpdateFood} handleDelete={this.handleDeleteFood} />);
                })}
             </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default SuperCategory;
