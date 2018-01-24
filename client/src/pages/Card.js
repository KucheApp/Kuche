import React, { Component } from 'react';
import axios from 'axios';
import API from "../api";
import AddFood from "./AddFood";

import { Button, Fade } from "reactstrap";


class Card extends Component {


    render(){
        
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 class="card-title">Card title</h5>
                    <form>
                        <div className="form-group row">
                            <label for="input" className="col-form-label">Add a food item here</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="input" placeholder="Add food" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="exampleFormControlSelect1">Select quantity</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group row">
                        <button type="button" class="btn btn-secondary">Submit</button>
                        <button type="button" class="btn btn-light">Cancel</button>

                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card;

