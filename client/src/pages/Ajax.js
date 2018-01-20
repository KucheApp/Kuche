import React from 'react';
import axios from 'axios';
import API from '../api';

class APITest extends React.Component {

   state ={
      foodSearchResults: [],
      foodSearch: "banana"
   }

componentDidMount() {
   API.SearchFood(this.state.foodSearch)
   .then(results => {
      console.log(results);
      this.setState({ foodSearchResults:results });
   })
   }

 render() {
   return (
     <div>
       <h1>{}</h1>
       <ul>
         {this.state.foodSearchResults.map(result =>
           <li>{result.name}</li>
         )}
       </ul>
     </div>
   );
 }
}

export default APITest;