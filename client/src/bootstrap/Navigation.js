import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const styles = {
  navigation: {
    position: 'fixed',
    bottom: '60px',
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    opacity: 0.4,
  }
}

class Navigation extends Component {
  render() {
      return (
        <div>
          <nav style={styles.navigation} class="navbar navbar-dark">
          </nav>
        </div>
      );
    }
  }

export default Navigation;