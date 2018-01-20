import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';
import Footer from './Footer';
import Carousel from './Carousel';
import Kitchen from './Kitchen';
import Navigation from './Navigation';

const styles = {
  jumbotron: {
<<<<<<< HEAD
    height: '1px',
  },
  row: {
    height: '50%',
  },
  container: {
    height: '600px',
  }
}

const Example = (props) => {
  return (
    <div>
    <div className="jumbotron bg-secondary mb-0" style={styles.jumbotron}>
      <div className="container-fluid">
        <h2 className="text-black text-center">Kitchen</h2>
      </div>
   </div>
   <div className="container-fluid" style={styles.container}>
    <div className="row" style={styles.row}>
      <div className="col-3">
        <Navbar />
=======
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
  
>>>>>>> c8d78ea255322a9d6a00a72f7d207f09db3ad848
      </div>
    );
  }
}


export default Main;