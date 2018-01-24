import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Category Images
import FreezerImg from '../imgs/freezer1sq.png';
import FridgeImg from '../imgs/fridge1sq.png';
import PantryImg from '../imgs/pantry1sq.png';
import CounterImg from '../imgs/countertop1sq.png';

const styles = {
   column : {
      minHeight: '175px',
      maxHeight: '250px',
      minWidth: '175px',
      maxWidth: '250px',
  },
  pushDown: {
    opacity: "0.0",
    height: "0px"
  }
}

const page = "Kitchen";

let KitchenLink = ({to, imgSrc, altText}) => (
  <div style={styles.column} className="col-4 p-2">
    <div className="card">
      <Link to={to}>
        <img className="card-img-top" src={imgSrc} alt={altText} />
      </Link>
    </div>
  </div>
);

class Kitchen extends Component {
   render() {
      return(
        <div>
          <div style={styles.pushDown} className="jumbotron"></div>
            <div className="container m-0 p-0">
              <div className="row m-0 p-1 justify-content-center">
                <KitchenLink to="/Fridge" imgSrc={FridgeImg} altText="Fridge" />
                <KitchenLink to="/Freezer" imgSrc={FreezerImg} altText="Freezer" />
                <KitchenLink to="/Pantry" imgSrc={PantryImg} altText="Pantry" />
                <KitchenLink to="/Counter" imgSrc={CounterImg} altText="Counter" />
              </div>
            </div>
         </div>
      );
   }
}

export default Kitchen;
