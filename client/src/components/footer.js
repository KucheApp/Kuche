import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

class Footer extends Component {
  render() {
    return (
        <div className="footer footer-dark">          
              <div className="footer-socials">
                  <a href="#" className="icon icon-round no-border icon-xs facebook-bg"><i className="fa fa-facebook"></i></a>
                  <a href="#" className="icon icon-round no-border icon-xs reddit-bg"><i className="fa fa-reddit"></i></a>
                  <a href="#" className="icon icon-round no-border icon-xs google-bg"><i className="fa fa-google-plus"></i></a>
                  <a href="#" className="icon icon-round no-border icon-xs twitter-bg"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="icon icon-round no-border icon-xs pinterest-bg"><i className="fa fa-pinterest"></i></a>
                  <a href="#" className="icon icon-round no-border icon-xs back-to-top bg-night-dark"><i className="fa fa-angle-up"></i></a>
              </div>
              <div className="decoration"></div>
              <p className="copyright-text">Copyright <span id="copyright-year"></span>. All Rights Reserved.</p>
        </div>

            <div className="footer-menu-tap-close remove-menu"></div>
            <div className="footer-menu-background dark-footer-background remove-menu"></div>
                
            <div className="sidebar-tap-close"></div>
            <a href="#" className="back-to-top-badge"><i className="fa fa-caret-up"></i>Back to Top</a>
        );
    }
}

export default Footer