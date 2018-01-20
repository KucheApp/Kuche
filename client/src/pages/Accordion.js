import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Accordion extends Component {

    render() {

      return (
      <div className="container">
        s<div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <button type="button" className="close" aria-label="Close" position="right">
                    <span aria-hidden="true" onCLick={() => this.removeItem}>&times;</span>
                  </button>
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {this.props.name}
                    </a>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse hide" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                    (Info will go here!)
                  </div>
                </div>
              </div>
              </div>
            </div>
          <div classNameName="col-2"></div>
        </div>
       
      </div>
      )
    }
}

export default Accordion;
