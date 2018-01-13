import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

class Kitchen extends Component {
  render() {
    return (
      <div id="page-transitions">
              
        <div className="header header-dark">
            <a href="#" className="header-icon header-icon-1 open-left-sidebar"><i className="fa fa-navicon"></i></a>
            <a href="index.html" className="header-logo scale-hover"></a>
            <a href="#" className="header-icon header-icon-4 open-right-sidebar"><i className="fa fa-shopping-cart"></i></a>
        </div>
                
        <div id="page-content">
          <div id="page-content-scroll">       
            
            <div className="home-slider half-bottom no-bottom">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img className="responsive-image no-bottom" src="images/pictures/kitchen1.jpeg"/>
                        <h4>Welcome to K&uuml;che</h4>
                        <p>Your go-to kitchen app!</p>
                    </div>
                    <div className="swiper-slide">
                        <img className="responsive-image no-bottom" src="images/pictures/kitchen2.jpeg"/>
                        <h4 className="center-text">Welcome to K&uuml;che</h4>
                        <p className="center-text">Your go-to kitchen app!</p>
                    </div>
                    <div className="swiper-slide">
                        <img className="responsive-image no-bottom" src="images/pictures/kitchen3.jpg"/>
                        <h4 className="right-text">Welcome to K&uuml;che</h4>
                        <p className="right-text">Your go-to kitchen app!</p>
                    </div>
                </div>
            </div>
                                        
            <div className="decoration decoration-margins"></div>

                <div className="heading-strip bg-3">
                    <h4 className="center-text">[Username]'s Kitchen</h4>
                
                    <div className="overlay dark-overlay"></div>
                </div>   

            <div className="decoration decoration-margins"></div>
    
            <div className="content-fullscreen badge-store">
                <h4></h4>

                <div className="coverflow-thumbnails full-top half-bottom no-material">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style="background-image:url(images/pictures/pantry1.png)"></div>
            
                        <div className="swiper-slide" style="background-image:url(images/pictures/countertop1.png)"></div>
                      
                        <div className="swiper-slide" style="background-image:url(images/pictures/fridge1.png)"></div>
                      
                        <div className="swiper-slide" style="background-image:url(images/pictures/freezer1.png)"></div>
                      
                    </div>
                </div>
                <p className="full-bottom">
                    Select a kitchen category to start organizing your food!
                </p>
            </div>
            
            <div className="decoration decoration-margins"></div>
            
            <div className="content">
                <h4 className="center-text half-bottom"><span className="color-red-dark">Expiring soon!</span></h4>
                <p className="center-text center-boxed-text">
                    Click to see which items are going to expire soon!
                </p>
                <a href="#" className="button button-red button-center button-s full-bottom">Expiring!</a>
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
        
    {/* <!--- <<<<<< SIDEBAR >>>>>> --> */}
    <div className="sidebar-left sidebar-dark">
        <div className="sidebar-scroll">
            <div className="sidebar-header sidebar-header-background">
                <h1>Kuche</h1>
                <h2>Your go-to kitchen app</h2>
                <img className="sidebar-logo-image preload-image" data-original="images/preload-K-logo.png">
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
                {/* <!-- Kitchen --> */}
                <div className="has-submenu">
                    <a className="menu-item open-submenu" href="#">
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
            
          
                <a className="close-sidebar menu-item" href="#">
                    <i className="bg-red-dark fa fa-times"></i>Close<i className="fa fa-circle"></i>
                </a>
            </div>    
            <div className="sidebar-divider no-bottom">Copyright <span id="copyright-year-sidebar"></span>. All rights Reserved</div>
        </div>
    </div>       */}
        
    <div className="footer-menu-tap-close remove-menu"></div>
    <div className="footer-menu-background dark-footer-background remove-menu"></div>

    <div className="sidebar-tap-close"></div>
    <a href="#" className="back-to-top-badge"><i className="fa fa-caret-up"></i>Back to Top</a>
    
    </div>
  
    );
  }
}

export default Kitchen
