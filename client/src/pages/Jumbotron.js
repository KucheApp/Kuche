import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Footer from './Footer';
import Kitchen from './Kitchen';
import Navigation from './Navigation';

const styles = {
  jumbotron: {
    maxHeight: '25%',
    backgroundColor: 'black',
    opacity: 0.4,
    },
    row: {
      height: '50%',
    },
  text: {
    color: 'white',
    opacity: 1.0
  }
}

class Main extends Component {
  render() {
    return (
      <div>
      <div style={styles.jumbotron} className="jumbotron">
        <div className="container-fluid">
          <h2 style={styles.text} className="text-center">Kitchen</h2>
        </div>
     </div>
     <div className="container">
      <div className="row justify-content-center">
        <Kitchen />
      </div>
     </div>
        <Navigation />
        <Footer />
  
      </div>
    );
  }
}


export default Main;