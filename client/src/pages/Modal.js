import React, { Component } from 'react';

import { Button, CardBody, Card, Col, Collapse, Container, Form, FormGroup, FormText, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';

import Footer from './Footer';
import Navigation from './Navigation';
import API from "../api";

let styles = {
    required: {
        color: "red",
    }
}

class ModalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      foodName: "",
      foodCategory: "",
      foodQuantity: 1,
      foodUnits: "",
      foodDatePurs: null,
      foodDateExp: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = event => {
      let {id, value} = event.target;
      this.setState({
          [id]: value
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    let {foodName, foodCategory, foodQuantity, foodUnits, foodDatePurs, foodDateExp} = this.state;

    let foodItem = {
        name: foodName,
        location: foodCategory,
        quantity: foodQuantity,
        quantityUnits: foodUnits,
        purchased: foodDatePurs,
        expires: foodDateExp
    }
    API.PostFood(foodItem);
}

  componentDidMount() {
      this.toggle();

  }

  render() {
    return (
      <div>
        <Button className="text-center" color="light" onClick={this.toggle}>{this.props.buttonLabel}Add Food</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Food</ModalHeader>
          <ModalBody>
            <Form>

                <FormGroup>
                    <Label for="foodName">Name<span style= {styles.required}>*</span></Label>
                    <Input value={this.state.foodName} onChange={this.handleInputChange} type="text" name="food" id="foodName" placeholder="add a food" />
                </FormGroup>
 
                <FormGroup>
                    <Label for="foodCategory">Category<span style= {styles.required}>*</span></Label>
                    <Input value={this.state.foodCategory} onChange={this.handleInputChange} type="select" name="selectCategory" id="foodCategory">
                        <option>Counter</option>
                        <option>Fridge</option>
                        <option>Freezer</option>
                        <option>Pantry</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="foodQuantity">Quantity<span style= {styles.required}>*</span></Label>
                    <Input value={this.state.foodQuantity} onChange={this.handleInputChange} type="number" name="number" id="foodQuantity" placeholder="quantity" />
                </FormGroup>

                <FormGroup>
                    <Label for="foodUnits">Units</Label>
                    <Input value={this.state.foodUnits} onChange={this.handleInputChange} type="select" name="select" id="foodUnits">
                        <option></option>
                        <option>pound</option>
                        <option>quart</option>
                        <option>gallon</option>
                        <option>pint</option>
                        <option>cup</option>
                        <option>ounce</option>
                        <option>tbsp</option>
                        <option>tsp</option>
                        <option>package</option>
                        <option>bunch</option>
                        <option>box</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="foodDatePurs">Date Purchased</Label>
                    <Input value={this.state.foodDatePurs} onChange={this.handleInputChange} type="date" name="date" id="foodDatePurs" placeholder="date purchased" />
                </FormGroup>

                <FormGroup>
                    <Label for="foodDateExp">Date Expires</Label>
                    <Input value={this.state.foodDateExp} onChange={this.handleInputChange} type="date" name="date" id="foodDateExp" placeholder="date expires" />
                </FormGroup>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAdd;