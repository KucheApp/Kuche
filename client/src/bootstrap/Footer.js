import React, { Component } from 'react';

const styles = {
  footer: {
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
      <footer style={styles.footer} className="container-fluid w-100 bg-secondary text-black">
        Footer
      </footer>
    );
  }
}

export default Footer;

