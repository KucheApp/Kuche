import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Footer from './Footer';
import Navbar from './Navbar';

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
      
      <Footer />

    </div>
      <Navbar />

    </div>
  );
};

export default Example;