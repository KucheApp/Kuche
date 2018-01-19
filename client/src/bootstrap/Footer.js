import React, { Component } from 'react';
import Navigation from './Navigation';

const styles = {
  footer: {
    display: 'block',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    height: '60px',
  }
}

class Footer extends Component {
  render() {
    return(
      <div>
        <Navigation />
      <footer style={styles.footer} className="container-fluid w-100 bg-secondary text-black">
        Kuche: Created by Brian Patrick, Chelsey Dolan, and Kai Wells, but mostly Kai
      </footer>
      </div>
    );
  }
}

export default Footer;

