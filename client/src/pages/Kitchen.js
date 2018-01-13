import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

class Kitchen extends Component {
  render() {
    return (
      <div id="page-content">
      <div id="page-content-scroll">      
          
          <div class="home-slider half-bottom no-bottom">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <img class="responsive-image no-bottom" src="images/pictures/kitchen1.jpeg"/>
                      <h4>Welcome to K&uuml;che</h4>
                      <p>Your go-to kitchen app!</p>
                  </div>
                  <div class="swiper-slide">
                      <img class="responsive-image no-bottom" src="images/pictures/kitchen2.jpeg"/>
                      <h4 class="center-text">Welcome to K&uuml;che</h4>
                      <p class="center-text">Your go-to kitchen app!</p>
                  </div>
                  <div class="swiper-slide">
                      <img class="responsive-image no-bottom" src="images/pictures/kitchen3.jpg"/>
                      <h4 class="right-text">Welcome to K&uuml;che</h4>
                      <p class="right-text">Your go-to kitchen app!</p>
                  </div>
              </div>
          </div>
                                
          <div class="decoration decoration-margins"></div>
  
              <div class="heading-strip bg-3">
                  <h4 class="center-text">[Username]'s Kitchen</h4>
                  <!-- <p class="center-text">Click on the category to add food</p> -->
                  <div class="overlay dark-overlay"></div>
              </div>   
  
          <div class="decoration decoration-margins"></div>
   
          <div class="content-fullscreen badge-store">
              <h4></h4>
  
              <div class="coverflow-thumbnails full-top half-bottom no-material">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" style="background-image:url(images/pictures/pantry1.png)"></div>
           
                      <div class="swiper-slide" style="background-image:url(images/pictures/countertop1.png)"></div>
                     
                      <div class="swiper-slide" style="background-image:url(images/pictures/fridge1.png)"></div>
                     
                      <div class="swiper-slide" style="background-image:url(images/pictures/freezer1.png)"></div>
                     
                  </div>
              </div>
              <p class="full-bottom">
                  Select a kitchen category to start organizing your food!
              </p>
          </div>
          
          <div class="decoration decoration-margins"></div>
          
          <div class="content">
              <h4 class="center-text half-bottom"><span class="color-red-dark">Expiring soon!</span></h4>
              <p class="center-text center-boxed-text">
                  Click to see which items are going to expire soon!
              </p>
              <a href="#" class="button button-red button-center button-s full-bottom">Expiring!</a>
          </div>
          
          <div class="decoration decoration-margins"></div>
          
          <div class="footer footer-dark">
              <!-- <a href="#" class="footer-logo scale-hover"></a> -->
          
              <div class="footer-socials">
                  <a href="#" class="icon icon-round no-border icon-xs facebook-bg"><i class="fa fa-facebook"></i></a>
                  <a href="#" class="icon icon-round no-border icon-xs reddit-bg"><i class="fa fa-reddit"></i></a>
                  <a href="#" class="icon icon-round no-border icon-xs google-bg"><i class="fa fa-google-plus"></i></a>
                  <a href="#" class="icon icon-round no-border icon-xs twitter-bg"><i class="fa fa-twitter"></i></a>
                  <a href="#" class="icon icon-round no-border icon-xs pinterest-bg"><i class="fa fa-pinterest"></i></a>
                  <a href="#" class="icon icon-round no-border icon-xs back-to-top bg-night-dark"><i class="fa fa-angle-up"></i></a>
              </div>
              <div class="decoration"></div>
              <p class="copyright-text">Copyright <span id="copyright-year"></span>. All Rights Reserved.</p>
          </div>
  
      </div>  
  </div>  
  
    );
  }
}

export default Kitchen
