import React, { Component } from "react";
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";

import API from "../api";

class Grocery extends Component {
   render() {
      return (
        <div id="page-content" className="page-content header-clear-full">
        <div id="page-content-scroll">
            
            <div className="heading-strip bg-1">
                <h3>Username's Grocery list</h3>
                <i className="fa fa-check-circle"></i>
                <div className="overlay dark-overlay"></div>
            </div>

            <div className="decoration decoration-margins"></div>
    
            <div className="content material-no-top material-no-bottom">
                <div className="checklist">
                    <a href="#" className="checklist-item checklist-item-complete responsive">
                        <i className="fa fa-circle-o"></i>
                        <i className="fa fa-check color-green-dark"></i>
                        <em>01 Jan<br><span>2023</span></br></em>
                        <strong>Green Check</strong>
                    </a>  
                    <div className="clear"></div>    
                </div>
                <div className="checklist">  
                    <a href="#" className="checklist-item responsive">
                        <i className="fa fa-circle-o"></i>
                        <i className="fa fa-times color-red-dark"></i>
                        <em>02 Feb<br><span>2023</span></br></em>
                        <strong>Red Cross</strong>
                    </a>   
                    <div className="clear"></div>             
                </div>      
            </div>
            
            <div className="decoration decoration-margins"></div>
            
        </div>  
         </div>
      );
   }
}

export default Grocery