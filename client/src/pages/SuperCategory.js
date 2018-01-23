import React, { Component } from 'react';
import Accordion from "./Accordion";
import API from '../api';
import shortid from 'shortid';
import Push from './Push';

const styles = {
   h1: {
     color: "white",
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
                  <h1 style={styles.h1}>I am {this.props.location} Show me what you got!</h1>
                  <a href="javascript:undefined" onClick={this.handlePostFood}>Add banananana</a>
               </div>
               <div className="col-2"></div>
            </div>
         </div>
      );
   }
}

export default SuperCategory;