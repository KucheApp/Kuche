import React, { Component } from 'react';

//Category Images
import Freezer from '../imgs/freezer1sq.png';
import Fridge from '../imgs/fridge1sq.png';
import Pantry from '../imgs/pantry1sq.png';
import Counter from '../imgs/countertop1sq.png';

const styles = {
   column : {
      minHeight: '175px',
      maxHeight: '250px',
      minWidth: '175px',
      maxWidth: '250px',
   }
}

class Kitchen extends Component {
   render() {
      return(
         <div>
               <div className="container m-0 p-0">
                  <div className="row m-0 p-1 justify-content-center">
                     <div style={styles.column} className="col-4 p-2">
                        <div className="card">
                           <a href="#"><img className="card-img-top" src={Fridge} alt="Fridge" /></a>
                        </div>
                     </div>
                     <div style={styles.column} className="col-4 p-2">
                        <div className="card">
                           <a href="#"><img className="card-img-top" src={Freezer} alt="Freezer" /></a>
                        </div>
                     </div>
                     <div style={styles.column} className="col-4 p-2">
                        <div className="card">
                           <a href="#"><img className="card-img-top" src={Pantry} alt="Pantry" /></a>
                        </div>
                     </div>
                     <div style={styles.column} className="col-4 p-2">
                        <div className="card">
                           <a href="#"><img className="card-img-top" src={Counter} alt="Counter" /></a>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
      );
   }
}

export default Kitchen;