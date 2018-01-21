import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';

class Accordion extends Component {
  render() {
    return (
      <div className="accordion row">
        <div className="offset-2 col-8">
          <div className="card">
            <div className="card-header">
              <button type="button" className="close" aria-label="Close" position="right" onClick={() => this.props.removeItem(this.props.name)}>
                <span aria-hidden="true">&times;</span>
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


// onCLick={() => this.props.removeItem}
