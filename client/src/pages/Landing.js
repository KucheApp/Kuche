import React, { Component } from "react";

import "./Landing.css";
import logo from "../imgs/kuche-white.png";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="Landing-Header">
          <img src={logo} className="Landing-Logo" alt="Kuche Logo" />
        </header>
      </div>
    );
  }
}

export default Landing;
