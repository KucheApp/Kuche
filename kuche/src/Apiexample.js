import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Apiexample extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoaded: false,
       items: []
     };
   }
 
   componentDidMount() {
     fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             product_name: result.data.product.product_name,
             ingredients: result.data.product.ingredients_ids_debug
           });
         },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
   }
 
   render() {
     const { error, isLoaded, items } = this.state;
     if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else {
       return (
         <ul>
           {items.map(item => (
             <li key={item.name}>
               {item.name} {item.price}
             </li>
           ))}
         </ul>
       );
     }
   }
 }

 export default Apiexample;