import React, { Component } from 'react';
import Accordion from "./Accordion";
import ModalAdd from './Modal';
import API from '../api';
import shortid from 'shortid';
import Push from './Push';

const styles = {
   h1: {
     color: "white",
     marginTop: "6rem",
     marginBottom: "3rem",
   }
 }

class SuperCategory extends Component {
   state = {
      items: [],
   }

   handlePostFood = () => {
      let foodItem = {
         name: "banana",
         location: this.props.location,
         quantity: 1
      }

      API.PostFood(foodItem).then(response => {
         console.log(response);
      });
   }

   handleUpdateItems = () => {
      API.GetFoodIn(this.props.location)
      .then(response => {
         console.log(response)
         this.setState({items: response.foodItems})
      });
   }

   componentDidMount() {
      this.handleUpdateItems();
   }

   render() {
      return(
         <div className="container">
            <div className="row">
               <div className="col-2"></div>
               <div className="col-8">
                  <h1 style={styles.h1}>{this.props.location}</h1>
                  <ModalAdd />
               </div>
               <div className="col-2"></div>
            </div>
         </div>
      );
   }
}

export default SuperCategory;