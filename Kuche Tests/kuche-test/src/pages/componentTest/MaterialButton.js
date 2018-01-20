import React, { Component } from 'react';
// import { render } from 'react-dom';
import Button from 'material-ui/Button';

class TestButton extends Component {
  render() {
    return (
      <Button raised color="primary">
        Hello World
      </Button>
    );
  }
}

export default TestButton;