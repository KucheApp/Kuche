import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="navHeader">
            <ul className="navList">
              <li><a href="#">Home</a></li>
              <li><a href="#">Back</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;