import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import API from '../api';
import Moment from 'react-moment';
import moment from 'moment';
import shortid from 'shortid';

const styles = {
  insideCard: {
    textAlign: 'left',
  }
}

class Accordion extends Component {

  state = {
    foodSearchResults: [],
    foodSearch: "",
    recipes: [],
    foodItem: this.props.foodItem,
    edit_quantity: false,
    edit_quantityUnits: false,
    temp_quantity: 0,
    temp_quantityUnits: undefined
  }

  componentDidMount() {
  //   API.SearchFood(this.props.foodItem.name)
  //   .then(results => {
  //   console.log(results);
  //   this.setState({ foodSearchResults: results });
  // }),
      API.getRecipes(this.props.foodItem.name)
      .then(res => {
        // console.log(res);
        this.setState({ recipes: res});
      })
      .catch(err => console.log(err));
  }

  // handleDelete = () => {
  //   console.log(this.props);
  //   API.DeleteFood(this.props.foodItem).then(response => {
  //     console.log(response);
  //   })
  // }

  handleInputChange = (event) => {
    let { name, value } = event.target;
    let key = "temp_" + name;
    if (name === "quantity") {
      value = parseInt(value, 10);
    }
    this.setState({[key]: value});
  }

  toggleEdit = (event) => {
    let { name } = event.target;
    let key = "edit_" + name;
    let tempKey = "temp_" + name;
    let value = this.state[key];
    let newState = { [key]: !value };

    if (event.target.className.indexOf("link") === -1) {
      // if done button
      let fooditem = this.state.foodItem;
      fooditem[name] = this.state[tempKey];
      newState.foodItem = fooditem;
      this.props.handleUpdate(fooditem);
    } else {
      // if initial select
      let oldValue = this.state.foodItem[name];
      if (name === "quantity") {
        oldValue = parseInt(oldValue, 10);
      }
      newState[tempKey] = oldValue;
    }

    this.setState(newState);
  }

  render() {
    let color = "text-primary";
    let expiration = this.props.foodItem.expires;
    if (expiration !== null) {
      expiration = moment(expiration);
      if (expiration > moment().add(7, "days")) {
        color = "text-success";
      } else if (expiration > moment()) {
        color = "text-warning";
      } else {
        color = "text-danger";
      }
    }
    return (
      <div className="card mt-2 mb-2">
        <div className="card-header">
          <button type="button" className="close" aria-label="Close" position="right" onClick={() => this.props.handleDelete(this.state.foodItem)}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="mb-0">
            <a href={"#hidden" + this.state.foodItem.id} role="button" aria-expanded="false" aria-controls={"hidden" + this.state.foodItem.id} data-toggle="collapse" className={color}>
              {this.state.foodItem.name}
            </a>
          </h5>
        </div>

        <div className="collapse hide" id={"hidden" + this.state.foodItem.id}>
          <div style={styles.insideCard} className="card-body">
            <Row>
              <Col xs="12" md="6">
                {this.state.edit_quantity ? (
                  <InputGroup>
                    <Input type="number" name="quantity" value={this.state.temp_quantity} onChange={this.handleInputChange} />
                    <InputGroupAddon addontype="append"><Button name="quantity" onClick={this.toggleEdit}>Done</Button></InputGroupAddon>
                  </InputGroup>
                ):(
                  <Button color="link" name="quantity" onClick={this.toggleEdit}>Quantity: {this.state.foodItem.quantity}</Button>
                )}
              </Col>
              <Col xs="12" md="6">
                {this.state.edit_quantityUnits ? (
                  <InputGroup>
                    <Input type="select" name="quantityUnits" value={this.state.temp_quantityUnits} onChange={this.handleInputChange}>
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
                      <option>bag</option>
                      <option>can</option>
                    </Input>
                    <InputGroupAddon addontype="append"><Button name="quantityUnits" onClick={this.toggleEdit}>Done</Button></InputGroupAddon>
                  </InputGroup>
                ):(
                  <Button color="link" name="quantityUnits" onClick={this.toggleEdit}>
                    {(this.state.foodItem.quantityUnits !== null && this.state.foodItem.quantityUnits !== undefined) ? (
                      `Units: ${this.state.foodItem.quantityUnits}`
                    ):(
                      "Each"
                    )}
                  </Button>
                )}
              </Col>
            </Row>

            <h6 style={{color: "black"}}>Date Purchased: <Moment format="MM/DD/YYYY">{this.state.foodItem.purchased}</Moment></h6>
            <h6 style={{color: "black"}}>Date Expires: <Moment format="MM/DD/YYYY">{this.state.foodItem.expires}</Moment></h6>

            {this.state.recipes.length > 0 ? (
              <div>
               <h6 style={{color: "black"}}>Recipe Suggestions:</h6>
               {this.state.recipes.slice(0, 4).map(recipe => {
                 return (<a href={recipe.href} key={shortid()} target="_blank">{recipe.title}</a>)
               })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
