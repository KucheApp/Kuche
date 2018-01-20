import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';

class Accordion extends Component {

  state= {
    id: shortid()
  }


    render() {

      return (
        <div className="row" id={this.id}>
          <div className="col-2"></div>
          <div className="col-8">
            <div className="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab">
                  <button type="button" className="close" aria-label="Close" position="right">
                    <span aria-hidden="true" >&times;</span>
                  </button>
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {this.props.name}
                    </a>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse hide" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                  {this.props.location}
                  </div>
                </div>
              </div>
              </div>
            </div>
       
      </div>
      )
    }
}

export default Accordion;


// onCLick={() => this.props.removeItem}