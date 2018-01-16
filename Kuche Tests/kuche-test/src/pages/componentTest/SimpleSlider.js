import React, { Component } from 'react';
// var Slider = require('react-slick');
import Slider from 'react-slick';
import image1 from './pictures/1t';

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 850,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img src={image1}/>
          </div>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
        </Slider>
      </div>
    );
  }
};

export default SimpleSlider;
