import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';
import API from '../api';

const styles = {
  insideCard: {
    textAlign: 'left',
  }
}

class Accordion extends Component {

  state ={
    foodSearchResults: [],
    foodSearch: "",
    recipes: []
  }

  componentDidMount() {
  //   API.SearchFood(this.props.foodItem.name)
  //   .then(results => {
  //   console.log(results);
  //   this.setState({ foodSearchResults: results });
  // }),
      API.getRecipes(this.props.foodItem.name)
      .then(res => {
        console.log(res);
        this.setState({ recipes: res});
      })
      .catch(err => console.log(err));
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
              <div style={styles.insideCard} className="card-body">
                <p>Food: {this.props.foodItem.name}</p>
                <p>Quanity: {this.props.foodItem.quantity}</p>
                <p>Units: {this.props.foodItem.quantityUnits}</p>
                <p>Date Purchased: {this.props.foodItem.purchased}</p>
                <p>Date Expires: {this.props.foodItem.expires}</p>
                {/* <p>Nutrition Information: {this.state.foodSearchResults.map(result => {result.name} )} </p> */}
               
                {this.state.recipes.length > 0 ? (
                     <p>Recipe Suggestions: <a href = {this.state.recipes[0].href} target="_blank">{this.state.recipes[0].title}</a> </p>
                ) : (
                    <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
