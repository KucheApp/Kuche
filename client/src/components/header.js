import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

class Header extends Component {
  render() {
    return (
        <div id="page-transitions">
              
            <div className="header header-dark">
                <a href="#" className="header-icon header-icon-1 open-left-sidebar"><i className="fa fa-navicon"></i></a>
                <a href="index.html" className="header-logo scale-hover"></a>
                <a href="#" className="header-icon header-icon-4 open-right-sidebar"><i className="fa fa-shopping-cart"></i></a>
            </div>

        </div>
        );
    }
}

export default Header


     