import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navigation: {
    // position: 'fixed',
    // top: '110px',
    width: '100%',
    // height: '5%',
    // backgroundColor: 'black',
    opacity: 0.6,
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
            <nav style={styles.navigation} className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Kuche
                <img src="./imgs/2.jpg" style={styles.img} alt="" />
              </a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/Kitchen">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Counter">Counter</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Fridge">Fridge</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Freezer">Freezer</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Pantry">Pantry</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/GroceryList">Grocery List</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
      );
    }
  }

export default Navigation;

//<nav style={styles.navigation} className="navbar justify-content-center navbar-light bg-light">
{/* <form style={styles.form} className="form-inline justify-content-center"> */}
