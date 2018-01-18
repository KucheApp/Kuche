import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';

const styles = {
  jumbotron: {
    maxHeight: '25%',
  }
}

const Example = (props) => {
  return (
    <div>
    <div className="jumbotron bg-secondary">
      <div className="container-fluid">
        <h2 className="text-black text-center">Kitchen</h2>
      </div>
   </div>
   <div className="container">
    <div className="row">
      <div className="col-3">
        <Navbar />
      </div>
      <div className="col-9">
        <Carousel />
      </div>
    </div>
   </div>
      <Footer />
      
     

    </div>
  );
};

export default Example;