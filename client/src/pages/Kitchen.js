import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

class Kitchen extends Component {
  render() {
    return (
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
              <h4 className="center-text">Username's Kitchen</h4>
              <div className="overlay dark-overlay"></div>
          </div>   
  
          <div className="decoration decoration-margins"></div>
   
          <div className="content-fullscreen badge-store">
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
            
      </div>  
  </div>  
  
    );
  }
}

export default Kitchen
