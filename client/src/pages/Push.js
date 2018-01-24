import React, { Component } from 'react';
import shortid from 'shortid';
import API from '../api'

let foodItem = {
   name: "banana",
   location: "counter",
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


//mapping over items
// {this.state.items.map(item => {
//    return(
//      <Accordion key={shortid()} id={item.id} name={item.name} location={item.location} />
//    );
//  })}


export default Push;