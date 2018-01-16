import React, { Component } from "react";
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";

import API from "../api";

class Freezer extends Component {
    render() {
      return (
        <div id="page-transitions">
                       
        <div id="page-content" className="header-clear">
            <div id="page-content-scroll">
                
                <div className="heading-strip bg-3">
                    <h4 className="center-text">Username's Freezer</h4>
                    <div className="overlay dark-overlay"></div>
                </div>

                <div className="decoration decoration-margins"></div>
                    
                <div className="content material-no-top">
                    <div className="accordion-item accordion-ghost">
                        <a href="#" className="accordion-toggle">Freezer Item 1 <i className="fa fa-plus"></i></a>
                        <div className="accordion-content ">
                            <p>Date purchased: </p>
                            <p>Date expires: </p>
                            <p>Brand: </p>
                            <p>Ingredients: </p>
                            <p>Recipes: </p>
                        </div>
                    </div>            
                    <div className="accordion-item accordion-ghost">
                        <a href="#" className="accordion-toggle">Freezer Item 2 <i className="fa fa-plus"></i></a>
                        <div className="accordion-content ">
                            <p>Date purchased: </p>
                            <p>Date expires: </p>
                            <p>Brand: </p>
                            <p>Ingredients: </p>
                            <p>Recipes: </p>
                        </div>
                    </div>            
                    <div className="accordion-item accordion-ghost last-accordion-item">
                        <a href="#" className="accordion-toggle">Freezer Item 3 <i className="fa fa-plus"></i></a>
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

            </div>  
        </div>

        </div>
      );
    }
  }

export default Freezer