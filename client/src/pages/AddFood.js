import React, { Component } from 'react';
// import { array } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/prop-types';
import axios from 'axios';
import API from "../api";
import Accordion from './Accordion';



const AddFood = (props) => (
  
  <div className="container">
      <form>
         <div className="form-group row">
            <label for="input" className="col-sm-2 col-form-label">Text</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="input" placeholder="Add food" />
                <button type="submit" className="btn-primary">Add</button>
            </div>
         </div>
      </form>
   </div>
);


export default AddFood;

// push to state.items [items is an array]
// you are pushing an object into the array
// the object will have three keys: location, name, ingredients
// only worry about adding food based on the page you're on


