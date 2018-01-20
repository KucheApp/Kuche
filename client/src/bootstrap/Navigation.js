import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navigation: {
    position: 'fixed',
    top: '110px',
    width: '100%',
    height: '5%',
    backgroundColor: 'black',
    opacity: 0.4,
  },
  form: {
    width: '100%',
  },
  button: {
    width: '15%',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

class Navigation extends Component {
  render() {
      return (
        <div>
          <nav style={styles.navigation} class="navbar navbar-light bg-light justify-content-center">
            <form style={styles.form} class="form-inline justify-content-center">
             <NavLink to="/"><button style={styles.button} class="btn btn-sm btn-outline-success" type="button">Button</button> </NavLink>
              <button style={styles.button} class="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} class="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} class="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} class="btn btn-sm btn-outline-secondary " type="button">Button</button>
            </form>
          </nav>
        </div>
      );
    }
  }

export default Navigation;