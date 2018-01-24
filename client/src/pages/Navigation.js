import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import API from "../api";

const styles = {
  navigation: {
    // position: 'fixed',
    // top: '110px',
    width: '100%',
    // height: '5%',
    // backgroundColor: 'black',
    opacity: 0.9,
  },
  form: {
    width: '100%',
  },
  button: {
    width: '15%',
    marginLeft: '5px',
    marginRight: '5px',
  },
  img: {
    width: "30",
    height: "30"
  }
}

class Navigation extends Component {
  render() {
      return (
        <div>
            <nav style={styles.navigation} className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-4">

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Kuche
                <img src="./imgs/2.jpg" style={styles.img} alt="" />
              </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/kitchen" className="nav-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/counter" className="nav-link">Counter</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/fridge" className="nav-link">Fridge</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/freezer" className="nav-link">Freezer</NavLink>
                  </li>
                  <li className="nav-item">
                   <NavLink to="/pantry" className="nav-link">Pantry</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/grocerylist" className="nav-link">Grocery List</NavLink>
                  </li>
                  <li className="nav-item right">
                    <a href="javascript:undefined" className="nav-link" onClick={() => API.LogOut()}>Log Out</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
      );
    }
  }

export default Navigation;
