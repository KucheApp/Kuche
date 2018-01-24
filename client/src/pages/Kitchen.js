import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from "../api";

//Category Images
import FreezerImg from '../imgs/freezer.png';
import FridgeImg from '../imgs/fridge.png';
import PantryImg from '../imgs/pantry.png';
import CounterImg from '../imgs/countertop.png';

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
  <div className="col-4 p-2">
    <div className="card">
      <Link to={to}>
        <img className="card-img-top" src={imgSrc} alt={altText} />
      </Link>
    </div>
  </div>
);

class Kitchen extends Component {
  state = {
    expiringSoon: [],
    shouldLogOut: false
  };

  handleUpdateItems = () => {
    API.GetFoodExpiringSoon()
    .then(data => {
      console.log(data);
      this.setState({expiringSoon: data.fooditems});
    })
    .catch(err => {
      this.setState({shouldLogOut: true});
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
        <div style={styles.pushDown} className="jumbotron"></div>
          <div className="container m-0 p-0">
            <div className="row m-0 p-1 justify-content-center">
              <KitchenLink to="/Fridge" imgSrc={FridgeImg} altText="Fridge" />
              <KitchenLink to="/Freezer" imgSrc={FreezerImg} altText="Freezer" />
              <KitchenLink to="/Pantry" imgSrc={PantryImg} altText="Pantry" />
              <KitchenLink to="/Counter" imgSrc={CounterImg} altText="Counter" />
            </div>
            <div className="row m-0 p-1 justify-content-center">
              <h2>Food Expiring Soon</h2>
              {

              }
            </div>
          </div>
       </div>
    );
  }
}

export default Kitchen;
