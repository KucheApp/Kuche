import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Accordion extends Component {

    render() {
      return (
      <div className="container">
          <form>
            <div className="form-group row">
              <label for="input" className="col-sm-2 col-form-label">Text</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="input" placeholder="Add food" />
                <button type="submit" className="btn-primary">Add</button>
              </div>
            </div>
          </form>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <button type="button" className="close" aria-label="Close" position="right">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Bananas
                    </a>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                    (Info will go here!)
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <button type="button" className="close" aria-label="Close" position="right">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Bread
                    </a>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="card-block">
                    (Info will go here!)
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <button type="button" className="close" aria-label="Close" position="right">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Onions
                    </a>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
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