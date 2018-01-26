import React, { Component } from 'react';


const styles = {
  footer: {
    padding: '20px',
    position: 'fixed',
    left: "0",
    bottom: "0",
    width: '100%',
    textAlign: 'center',
    height: '60px',
  },
  footerText: {
    color: "white"
  },
  phantom: {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  }
}

class Footer extends Component {
  render() {
    return(
      <div style={styles.phantom}>
      <footer style={styles.footer} className="container-fluid w-100 bg-secondary text-black">
        <p className="footer-text">&copy; 2018 | Kuche: Created by <a href="https://github.com/SuperBerny">Brian Patrick</a>, <a href="https://github.com/chelseymarie6"> Chelsey Dolan</a>, and <a href="https://github.com/quells">Kai Wells</a></p>
      </footer>
      </div>
    );
  }
}

export default Footer;
