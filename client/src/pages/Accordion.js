import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';
import API from '../api';

class Accordion extends Component {
  state ={
    foodSearchResults: [],
    foodSearch: "banana"
  }

  componentDidMount() {
    API.SearchFood(this.state.foodSearch)
    .then(results => {
    console.log(results);
    this.setState({ foodSearchResults:results });
  })
  }

  handleDelete = () => {
    console.log(this.props);
    API.DeleteFood(this.props.foodItem).then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="accordion row">
        <div className="offset-2 col-8">
          <div className="card">
            <div className="card-header">
              <button type="button" className="close" aria-label="Close" position="right">
                <span aria-hidden="true" onClick={() => this.props.handleDelete}>&times;</span>
              </button>
              <h5 className="mb-0">
                <a href={"#hidden" + this.props.id} role="button" aria-expanded="false" aria-controls={"hidden" + this.props.id} data-toggle="collapse">
                  {this.props.foodItem.name}
                </a>
              </h5>
            </div>

            <div className="collapse hide" id={"hidden" + this.props.id}>
              <div className="card-body">
                <p>Food: {this.props.foodItem.name}</p>
                <p>Quanity: {this.props.foodItem.quantity}</p>
                <p>Units: {this.props.foodItem.quantityUnits}</p>
                <p>Date Purchased: {this.props.foodItem.purchased}</p>
                <p>Date Expires: {this.props.foodItem.expires}</p>
                <p>Nutrition Information: {this.state.foodSearchResults.map(result => {result.name} )} </p>
                <p>Recipe Suggestions: {this.props.foodItem.name}</p>
                {this.props.foodItem.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
