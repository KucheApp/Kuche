import React, { Component } from 'react';
import shortid from 'shortid';
import API from '../api'

let foodItem = {
   name: "banana",
   location: "pantry",
   quantity: 1
}

class Push extends Component {

   handlePostFood = () => {
      API.PostFood(foodItem).then(response => {
         console.log(response);
      });
   }



   render() {
      return(
         <div>
            <button id="testButton" onClick={() => this.handlePostFood()}>Test Button</button>
         </div>
      );
   }
}


export default Push;