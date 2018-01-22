import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';
import API from '../api';

let foodItem = {
  id: this.id
};


class Accordion extends Component {

  handleDelete = () => {
    API.DeleteFood(foodItem).then(response => {
      console.log(response);
    })
  }

  componentDidMount() {
    this.handleDelete();
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
                  {this.props.name}
                </a>
              </h5>
            </div>

            <div className="collapse hide" id={"hidden" + this.props.id}>
              <div className="card-body">
                {this.props.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
