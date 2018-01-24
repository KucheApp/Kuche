import React, { Component } from 'react';

import { Button, CardBody, Card, Col, Collapse, Container, Form, FormGroup, FormText, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';

import Footer from './Footer';
import Navigation from './Navigation';


class ModalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="light" onClick={this.toggle}>{this.props.buttonLabel}Add Food</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Food</ModalHeader>
          <ModalBody>
            <Form>

                <FormGroup>
                    <Label for="foodName">Name: </Label>
                    <Input type="email" name="food" placeholder="add a food" />
                </FormGroup>
 
                <FormGroup>
                    <Label for="exampleSelect">Category</Label>
                    <Input type="select" name="selectCategory" id="exampleSelect">
                        <option>Counter</option>
                        <option>Fridge</option>
                        <option>Freezer</option>
                        <option>Pantry</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Quantity</Label>
                    <Input type="number" name="number" id="exampleNumber" placeholder="quantity" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleSelect">Units</Label>
                    <Input type="select" name="select" id="">
                        <option>pound</option>
                        <option>quart</option>
                        <option>gallon</option>
                        <option>pint</option>
                        <option>cup</option>
                        <option>ounce</option>
                        <option>tbsp</option>
                        <option>tsp</option>
                        <option>package</option>

                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Date Purchased</Label>
                    <Input type="date" name="date" id="exampleDate" placeholder="date purchased" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Date Expires</Label>
                    <Input type="date" name="date" id="exampleDate" placeholder="date expires" />
                </FormGroup>


               
                <FormGroup>
                    <Label for="exampleFile">Choose a File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        Should we have an option to upload anything?
                </FormText>
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