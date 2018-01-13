import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class FridgeAccordion extends Component {

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
        {/* <!--Enables this element to be scrolled -->  */}
        <div id="page-content-scroll">
            
            <div className="heading-strip bg-3">
                <h4 className="center-text">[Username]'s Fridge</h4>
                {/*<p className="center-text">Click on the category to add food</p> */}
                <div className="overlay dark-overlay"></div>
            </div>
    
            <div className="decoration decoration-margins"></div>
                   
            <div className="content material-no-top">
                <div className="accordion-item accordion-ghost">
                    <a href="#" className="accordion-toggle">Fridge Item 1 <i className="fa fa-plus"></i></a>
                    <div className="accordion-content ">
                        <p>Date purchased: </p>
                        <p>Date expires: </p>
                        <p>Brand: </p>
                        <p>Ingredients: </p>
                        <p>Recipes: </p>
                    </div>
                </div>            
                <div className="accordion-item accordion-ghost">
                    <a href="#" className="accordion-toggle">Fridge Item 2 <i className="fa fa-plus"></i></a>
                    <div className="accordion-content ">
                        <p>Date purchased: </p>
                        <p>Date expires: </p>
                        <p>Brand: </p>
                        <p>Ingredients: </p>
                        <p>Recipes: </p>
                    </div>
                </div>            
                <div className="accordion-item accordion-ghost last-accordion-item">
                    <a href="#" className="accordion-toggle">Fridge Item 3 <i className="fa fa-plus"></i></a>
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
                {/* <a href="#" className="footer-logo scale-hover"></a> */}
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
    
    {/* Sidebar */}
    <div className="sidebar-left sidebar-dark">
        <div className="sidebar-scroll">
            <div className="sidebar-header sidebar-header-background">
                <h1>Kuche</h1>
                <h2>Your go-to kitchen app</h2>
                <img className="sidebar-logo-image preload-image" data-original="images/preload-K-logo.png"/>
                <div className="sidebar-header-controls">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-envelope"></i></a>
                    <a href="#" className="close-sidebar"><i className="fa fa-times"></i></a>
                </div>
            </div>        
            <div className="sidebar-divider">Navigation</div>
            <div className="sidebar-menu"> 
                <a className="menu-item active-item" href="index.html">
                    <i className="bg-red-dark fa fa-home"></i>Home<i className="fa fa-circle"></i> 
                </a> 
                {/*Kitchen*/}
                <div className="has-submenu">
                    <a className="menu-item open-submenu" href="#"> {/*active-item*/}
                        <i className="bg-blue-dark fa fa-navicon"></i>Kitchen<em className="menu-number">0</em>
                    </a>
                    <div className="submenu">                
                        <a className="menu-item" href="menu-flat.html">
                            <i className="fa fa-circle-o"></i>Counter<i className="fa fa-circle"></i>  
                        </a>
                        <a className="menu-item" href="menu-colors.html">
                            <i className="fa fa-circle-o"></i>Fridge<i className="fa fa-circle"></i>  
                        </a>    
                        <a className="menu-item" href="menu-colors.html">
                            <i className="fa fa-circle-o"></i>Freezer<i className="fa fa-circle"></i>  
                        </a> 
                        <a className="menu-item" href="menu-colors.html">
                            <i className="fa fa-circle-o"></i>Pantry<i className="fa fa-circle"></i>  
                        </a> 
                    </div>
                </div>
                {/* <!-- Grocery List --> */}
                <a className="menu-item" href="index.html">
                    <i className="bg-green-dark fa fa-shopping-cart"></i>Grocery List<i className="fa fa-circle"></i> 
                </a>   
                {/* <!-- Contact            --> */}
                <a className="menu-item" href="page-contact.html">
                    <i className="bg-blue-dark fa fa-envelope-o"></i>Contact<i className="fa fa-circle"></i>
                </a> 
                {/* <!-- Close menu             --> */}
                <a className="close-sidebar menu-item" href="#">
                    <i className="bg-red-dark fa fa-times"></i>Close<i className="fa fa-circle"></i>
                </a>
            </div>    
            <div className="sidebar-divider no-bottom">Copyright <span id="copyright-year-sidebar"></span>. All rights Reserved</div>
        </div>
    </div> 
    
    <div className="footer-menu-tap-close remove-menu"></div>
    <div className="footer-menu-background dark-footer-background remove-menu"></div>
        
    
    <div className="sidebar-tap-close"></div>
    <a href="#" classNameName="back-to-top-badge"><i classNameName="fa fa-caret-up"></i>Back to Top</a>
        
    </div>
   );
}

}