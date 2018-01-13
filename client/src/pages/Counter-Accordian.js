import React, { Component } from "react";
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";

import API from "../api";

class Pantry extends Component {
    render() {
      return (
        <div id="page-transitions">
            
        <div className="page-preloader page-preloader-light">
            <div className="loader loader-frames"><i></i><i></i><i></i><i></i></div>
        </div>
            
        <div className="header header-dark">
            <a href="#" className="header-icon header-icon-1 open-left-sidebar"><i className="fa fa-navicon"></i></a>
            <a href="index.html" className="header-logo scale-hover"></a>
            <a href="#" className="header-icon header-icon-4 open-right-sidebar"><i className="fa fa-shopping-cart"></i></a>
        </div>
                    
        <div id="page-content" className="header-clear">
            <div id="page-content-scroll">
                
                <div className="heading-strip bg-3">
                    <h4 className="center-text">[Username]'s Counter</h4>
                    
                    <div className="overlay dark-overlay"></div>
                </div>

                <div className="decoration decoration-margins"></div>
                    
                <div className="content material-no-top">
                    <div className="accordion-item accordion-ghost">
                        <a href="#" className="accordion-toggle">Counter Item 1 <i className="fa fa-plus"></i></a>
                        <div className="accordion-content ">
                            <p>Date purchased: </p>
                            <p>Date expires: </p>
                            <p>Brand: </p>
                            <p>Ingredients: </p>
                            <p>Recipes: </p>
                        </div>
                    </div>            
                    <div className="accordion-item accordion-ghost">
                        <a href="#" className="accordion-toggle">Counter Item 2 <i className="fa fa-plus"></i></a>
                        <div className="accordion-content ">
                            <p>Date purchased: </p>
                            <p>Date expires: </p>
                            <p>Brand: </p>
                            <p>Ingredients: </p>
                            <p>Recipes: </p>
                        </div>
                    </div>            
                    <div className="accordion-item accordion-ghost last-accordion-item">
                        <a href="#" className="accordion-toggle">Counter Item 3 <i className="fa fa-plus"></i></a>
                        <div className="accordion-content ">
                            <p>Date purchased: </p>
                            <p>Date expires: </p>
                            <p>Brand: </p>
                            <p>Ingredients: </p>
                            <p>Recipes: </p>
                        </div>
                    </div>
                </div>  
                
                <div className="decoration decoration-margins"></div>

                
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
                
            </div>  
        </div>

        
            
        <div className="footer-menu-tap-close remove-menu"></div>
        <div className="footer-menu-background dark-footer-background remove-menu"></div>
            
        <div className="sidebar-tap-close"></div>
        <a href="#" className="back-to-top-badge"><i className="fa fa-caret-up"></i>Back to Top</a>
            
        </div>
      );
    }
  }

export default Pantry