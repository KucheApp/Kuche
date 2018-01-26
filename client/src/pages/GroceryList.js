import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";
import shortid from 'shortid';
import API from '../api';

import styles from './PageStyles';
import SuperCategory from "./SuperCategory";
import Navigation from './Navigation';
import Accordion from "./Accordion";
import Footer from './Footer';

let gli = {
  marginTop: "10px",
  marginBottom: "10px",
}

let GroceryListItem = (props) => {
  return (
    <div className="card" style={gli}>
      <div className="card-header">
        <button type="button" className="close" aria-label="Close" position="right" onClick={props.handleDeleteItem}>
          <span>&times;</span>
        </button>
        <h5 className="mb-0">{props.item.quantity + " " + props.item.name}</h5>
      </div>
    </div>
  );
}

class GroceryList extends Component {
  state = {
    addFoodInput: "",
    items: [],
    shouldLogOut: false
  }

  handleInputChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleAddItem = () => {
    if (this.state.addFoodInput.length < 1) return;

    let newItem = {
      location: this.props.location
    };
    try {
      // #NaturalLanguageProcessing! sort of. mostly.
      let count = this.state.addFoodInput.trim().match(/^\d+ /gm);
      let item = this.state.addFoodInput.trim().match(/ .+$/gm);
      if (count.length === 1 && item.length === 1) {
        item = item[0].trim();
        count = count[0].trim();
        newItem.name = item;
        newItem.quantity = parseInt(count);
      }
    } catch (err) {
      newItem.name = this.state.addFoodInput.trim();
      newItem.quantity = 1;
    }

    API.PostFood(newItem)
    .then(newItem => {
      let items = this.state.items;
      items.push(newItem);
      this.setState({addFoodInput: "", items: items});
      this.handleUpdateItems();
    })
    .catch(err => {
      console.log(err)
      this.setState({shouldLogOut: true})
    })
  }

  handleDeleteItem = (deleteItem) => {
    API.DeleteFood(deleteItem)
    .then(response => {
      console.log(response)
      let items = this.state.items.filter(item => item.id !== deleteItem.id);
      this.setState({items: items});
    })
    .catch(err => {
      console.log(err)
      this.setState({shouldLogOut: true})
    })
  }

  handleUpdateItems = () => {
    API.GetFoodIn(this.props.location)
    .then(response => {
      this.setState({items: response.fooditems})
    })
    .catch(err => {
      this.setState({shouldLogOut: true})
    })
  }

  handleKeyPress = (event) => {
    let key = event.key;
    let target = event.target;
    switch (key) {
      case "Enter":
        switch (target.name) {
          case "addFoodInput":
            this.handleAddItem();
            break;
          default:
            break;
        }
        break
      default:
        break;
    }
  };

  componentDidMount() {
    this.handleUpdateItems();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Navigation />
          </div>

          <div className="row">
             <div className="col-0 col-xs-1 col-md-2"></div>
             <div className="col-12 col-xs-10 col-md-8 justify-content-center">
                <h1 style={styles.h1}>{this.props.location}</h1>
                <div className="container form">
                  <FormGroup className="row">
                    <Input type="text" name="addFoodInput" className="col-9" placeholder="Add Food" value={this.state.addFoodInput} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
                    <Button className="col-2 offset-1" onClick={this.handleAddItem}>Add</Button>
                  </FormGroup>
                </div>
                {this.state.items.map(item => (<GroceryListItem key={shortid()} item={item} handleDeleteItem={() => this.handleDeleteItem(item)} />))}
             </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GroceryList;
