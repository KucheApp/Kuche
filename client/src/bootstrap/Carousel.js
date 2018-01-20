import React, { Component } from 'react';

//Category Images
import Freezer from '../imgs/freezer1sq.png';
import Fridge from '../imgs/fridge1sq.png';
import Pantry from '../imgs/pantry1sq.png';
import Counter from '../imgs/countertop1sq.png';

class Carousel extends Component {
  render() {
    return(
      <div id="carouselExampleIndicators" className="carousel slide m-0" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block" src={Freezer} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block" src={Fridge} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block" src={Pantry} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block" src={Counter} alt="Fourth slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;