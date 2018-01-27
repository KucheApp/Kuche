import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, FormGroup, InputGroup, InputGroupAddon, Input, Container, Row, Col } from "reactstrap";
import shortid from 'shortid';
import API from '../api';

import styles from './PageStyles';
import Navigation from './Navigation';
import Footer from './Footer';

let gli = {
  marginTop: "10px",
  marginBottom: "10px",
}

let GroceryListItem = (props) => {
  let { item } = props;
  return (
    <div className="card" style={gli}>
      <div className="card-header">
        <button type="button" className="close" aria-label="Close" position="right" onClick={() => props.handleDeleteItem(item)}>
          <span>&times;</span>
        </button>
        <h5 className="mb-0">
          <a href="javascript:undefined" onClick={() => props.handleClickItem(item)}>
            {item.quantity + " " + item.name}
          </a>
        </h5>
      </div>
    </div>
  );
}

class GroceryList extends Component {
  state = {
    addFoodInput: "",
    items: [],
    shouldLogOut: false,
    moveItemModalOpen: false,
    moveItem: undefined,
    moveItemDestination: "Counter"
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
        newItem.quantity = parseInt(count, 10);
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
      // console.log(response)
      let items = this.state.items.filter(item => item.id !== deleteItem.id);
      this.setState({items: items});
    })
    .catch(err => {
      console.log(err)
      this.setState({shouldLogOut: true})
    })
  }

  handleClickItem = (moveItem) => {
    this.setState({
      moveItem: moveItem
    }, () => this.toggleMoveModal());
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

  toggleMoveModal = () => {
    let newMoveItem = this.state.moveItem;
    if (this.state.moveItemModalOpen) {
      newMoveItem = undefined;
    }
    this.setState({
      moveItemModalOpen: !this.state.moveItemModalOpen,
      moveItem: newMoveItem
    });
  }

  handleMoveItemDestinationChange = (event) => {
    this.setState({ moveItemDestination: event.target.value });
  }

  handleMoveItem = () => {
    if (this.state.moveItem !== undefined) {
      let moveItem = this.state.moveItem;
      moveItem.location = this.state.moveItemDestination;
      moveItem.purchased = Date.now();
      API.UpdateFood(moveItem)
      .then(() => {
        this.handleUpdateItems()
      })
      .catch(err => {
        console.log(err);
        this.setState({shouldLogOut: true})
      })
    }
    this.toggleMoveModal();
  }

  componentDidMount() {
    this.handleUpdateItems();
  }

  render() {
    return (
      <div>
        <Container>
          <Row><Navigation /></Row>

          <Row>
             <Col xs={{size: 12, offset: 0}} sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}}>
                <h1 style={styles.h1}>{this.props.location}</h1>
                <InputGroup>
                  <Input name="addFoodInput" placeholder="Add Item" value={this.state.addFoodInput} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
                  <InputGroupAddon addontype="append">
                    <Button onClick={this.handleAddItem}>Add</Button>
                  </InputGroupAddon>
                </InputGroup>
                {this.state.items.map(item => (
                  <GroceryListItem key={shortid()} item={item} handleClickItem={this.handleClickItem} handleDeleteItem={this.handleDeleteItem} />
                ))}
             </Col>
          </Row>
        </Container>

        <Modal isOpen={this.state.moveItemModalOpen}>
          <ModalHeader toggle={this.toggleMoveModal}>Purchased Item</ModalHeader>
          <ModalBody>
            <FormGroup className="form-inline">
              Move my {this.state.moveItem !== undefined ? this.state.moveItem.name : "food"} to the &nbsp;
              <Input type="select" value={this.state.moveItemDestination} onChange={this.handleMoveItemDestinationChange}>
                <option>Pantry</option>
                <option>Counter</option>
                <option>Fridge</option>
                <option>Freezer</option>
              </Input>
            </FormGroup>
            <Button color="primary" onClick={this.handleMoveItem}>Move It</Button>
          </ModalBody>
        </Modal>

        <Footer />
      </div>
    );
  }
}

export default GroceryList;
