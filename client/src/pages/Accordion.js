import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import API from '../api';
import Moment from 'react-moment';
import moment from 'moment';


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
        // console.log(res);
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
      <div className="card">
        <div className="card-header">
          <button type="button" className="close" aria-label="Close" position="right" onClick={() => this.props.handleDelete(this.props.foodItem)}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="mb-0">
            <a href={"#hidden" + this.props.id} role="button" aria-expanded="false" aria-controls={"hidden" + this.props.id} data-toggle="collapse" className={color}>
              {this.props.foodItem.name}
            </a>
          </h5>
        </div>

        <div className="collapse hide" id={"hidden" + this.props.id}>
          <div style={styles.insideCard} className="card-body">
            <Row>
              <Col><h6>Quanity: {this.props.foodItem.quantity}</h6></Col>
              <Col><h6>Units: {this.props.foodItem.quantityUnits}</h6></Col>
            </Row>

            <h6>Date Purchased: <Moment format="MM/DD/YYYY">{this.props.foodItem.purchased}</Moment></h6>
            <h6>Date Expires: <Moment format="MM/DD/YYYY">{this.props.foodItem.expires}</Moment></h6>

            {this.state.recipes.length > 0 ? (
                 <div>
                   <h6>Recipe Suggestions:  </h6>
                    <a href = {this.state.recipes[0].href} target="_blank">{this.state.recipes[0].title}</a>
                    <a href = {this.state.recipes[1].href} target="_blank">{this.state.recipes[1].title}</a>
                    <a href = {this.state.recipes[2].href} target="_blank">{this.state.recipes[2].title}</a>
                    <a href = {this.state.recipes[3].href} target="_blank">{this.state.recipes[3].title}</a>
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
