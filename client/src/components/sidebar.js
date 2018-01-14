import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

class Sidebar extends Component {
  render() {
    return (

        <div className="sidebar-left sidebar-dark">
        <div className="sidebar-scroll">
            <div className="sidebar-header sidebar-header-background">
                <h1>Kuche</h1>
                <h2>Your go-to kitchen app</h2>
                <img className="sidebar-logo-image preload-image" data-original="imgs/kuche-white.png"/>
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
                        <a className="menu-item" href="#">
                            <i className="fa fa-circle-o"></i>Counter<i className="fa fa-circle"></i>  
                        </a>
                        <a className="menu-item" href="#">
                            <i className="fa fa-circle-o"></i>Fridge<i className="fa fa-circle"></i>  
                        </a>    
                        <a className="menu-item" href="#">
                            <i className="fa fa-circle-o"></i>Freezer<i className="fa fa-circle"></i>  
                        </a> 
                        <a className="menu-item" href="#">
                            <i className="fa fa-circle-o"></i>Pantry<i className="fa fa-circle"></i>  
                        </a> 
                    </div>
                </div>
                {/* <!-- Grocery List --> */}
                <a className="menu-item" href="#">
                    <i className="bg-green-dark fa fa-shopping-cart"></i>Grocery List<i className="fa fa-circle"></i> 
                </a>   

            </div>    
            <div className="sidebar-divider no-bottom">Copyright <span id="copyright-year-sidebar"></span>. All rights Reserved</div>
        </div>
        </div> 

            );
        }
    }

export default Sidebar