import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// const proxy = 'https://cors-anywhere.herokuapp.com/';


class Ajax extends Component {
   constructor(props) {
      super(props);

      this.state = {
         posts: []
      };
   }

   componentDidMount() {
      axios.get(`https://world.openfoodfacts.org/api/v0/product/737628064502.json`)
      .then (res => {
         console.log(res.data);
         const product = res.data.product.product_name;
         const ingredients = res.data.product.ingredients_ids_debug;
         console.log(product);
         console.log(ingredients);
         this.setState({ product, ingredients });
      });
   }


   render() {
      return (
         <div>
            <h1>Nutritionix Test</h1>
            <h2>{this.state.product}</h2>

         </div>
      );
   }
}

export default Ajax;