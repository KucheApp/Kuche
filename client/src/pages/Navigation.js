import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import API from "../api";
import logo from "../imgs/kuche.png";

const styles = {
  navigation: {
    // display: "flex",
    // minHeight: "100vh",
    // flexDirection: "column",
    // width: '100%',
    // height: '5%',
    // backgroundColor: 'black',
    opacity: 0.97,
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
    height: "30px"
  }
}

class Navigation extends Component {
  handleLogOut = () => {
    API.LogOut()
  };

  render() {
    return (
      <div>
        <nav style={styles.navigation} className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/kitchen" className="navbar-brand">
            <img src={logo} style={styles.img} alt="Kuche Logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/kitchen" className="nav-link font-weight-bold">Home</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/pantry" className="nav-link font-weight-bold">Pantry</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counter" className="nav-link font-weight-bold">Counter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fridge" className="nav-link font-weight-bold">Fridge</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/freezer" className="nav-link font-weight-bold">Freezer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/grocerylist" className="nav-link font-weight-bold">Grocery List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/account" className="nav-link font-weight-bold">Account</NavLink>
              </li>
              <li className="nav-item right">
                <Link to="/" onClick={this.handleLogOut} className="nav-link font-weight-bold">Log Out</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
