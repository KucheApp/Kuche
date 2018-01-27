import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Footer from './Footer';
import Kitchen from './Kitchen';
import Navigation from './Navigation';

class Main extends Component {
  render() {
    return (
    <div>
      <Container>
        <Row>
          <Navigation />
        </Row>

        <Row>
          <Kitchen />
        </Row>
      </Container>

      <Footer />
    </div>
    );
  }
}


export default Main;
