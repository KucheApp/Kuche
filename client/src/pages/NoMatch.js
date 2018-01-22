import React, { Component } from "react";

const styles = {
  noMatch: {
    color: 'lightgrey',
    marginTop: '75px',
  }
}

class NoMatch extends Component {
  render() {
    return (
      <h1 style={styles.noMatch}>404 Not Found</h1>
    );
  }
}

export default NoMatch;
