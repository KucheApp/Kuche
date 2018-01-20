import React, { Component } from 'react';

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
          <nav style={styles.navigation} className="navbar navbar-expand{-sm|-md|-lg|-xl}">
            <form style={styles.form} className="form-inline justify-content-center">
              {/* <button style={styles.button} className="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} className="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} className="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} className="btn btn-sm btn-outline-secondary " type="button">Button</button>
              <button style={styles.button} className="btn btn-sm btn-outline-secondary " type="button">Button</button> */}
            </form>
          </nav>
        </div>
      );
    }
  }

export default Navigation;

// justify-content-center  navbar-light bg-light