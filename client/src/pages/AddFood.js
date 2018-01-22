import React, { Component } from 'react';
// import { array } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/prop-types';
import axios from 'axios';
import API from "../api";
import Accordion from './Accordion';
import Card from "./Card";



class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        let button = (<button onClick={this.handleClick} type="submit" className="btn-primary">Add Food</button >);

        return (
          <div>
            {this.state.isToggleOn ? <Card /> : <div>{button}</div>}
        </div>
        )
    }
}



export default AddFood;

// push to state.items [items is an array]
// you are pushing an object into the array
// the object will have three keys: location, name, ingredients
// only worry about adding food based on the page you're on


