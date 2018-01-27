import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Input, Label, Button, FormGroup } from "reactstrap";

import API from "../api";

import styles from "./PageStyles";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Account extends Component {
  state = {
    oldEmail: "",
    oldPassword: "",
    oldUsername: "",
    newEmail: "",
    newUsername: "",
    newPassword: "",
    showingOldForm: true,
    shouldLogOut: false
  }

  handleInputChange = (event) => {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmitOld = () => {
    let { oldEmail, oldPassword } = this.state;
    if (oldEmail.length < 1 || oldPassword.length < 1) return;

    API.ResetToken(oldEmail, oldPassword)
    .then(() => API.GetUsername())
    .then(data => {
      let oldUsername = data.username;
      this.setState({
        oldUsername: oldUsername,
        newEmail: oldEmail,
        newUsername: oldUsername,
        newPassword: oldPassword,
        showingOldForm: false
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({shouldLogOut: true})
    })
  }

  handleDeleteAccount = () => {
    let { oldEmail, oldPassword, oldUsername } = this.state;
    API.DeleteAccount(oldEmail, oldPassword, oldUsername)
    .then(() => {
      this.setState({shouldLogOut: true});
    })
    .catch(console.log)
  }

  handleUpdateAccount = () => {
    let { oldEmail, oldPassword, oldUsername, newEmail, newPassword, newUsername } = this.state;
    if (newPassword.length < 8) return;

    API.UpdateAccount(oldEmail, oldPassword, oldUsername, newEmail, newPassword, newUsername)
    .then(() => API.ResetToken(newEmail, newPassword))
    .then(() => {
      this.setState({oldEmail: newEmail}, () => this.handleCancel())
    })
  }

  handleCancel = () => {
    this.setState({
      oldPassword: "",
      newEmail: "",
      newUsername: "",
      newPassword: "",
      showingOldForm: true
    })
  }

  componentDidMount() {
    let oldEmail = API.GetEmail();
    if (oldEmail !== null) {
      this.setState({oldEmail})
    }
  }

  render() {
    if (this.state.shouldLogOut) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Container>
          <Row><Navigation /></Row>
          <div style={styles.pushDown} className="jumbotron"></div>

          <Row>
            <Col xs={{size: 12, offset: 0}} sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}}>
              <Card>
                <CardBody>
                  <CardTitle>Account Management</CardTitle>
                  <br />
                  {this.state.showingOldForm ? (
                    <div>
                      <FormGroup>
                        <Label>Current Email</Label>
                        <Input type="text" name="oldEmail" value={this.state.oldEmail} placeholder="Current Email" onChange={this.handleInputChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label>Current Password</Label>
                        <Input type="password" name="oldPassword" value={this.state.oldPassword} placeholder="Current Password" onChange={this.handleInputChange} />
                      </FormGroup>
                      <Button color="primary" onClick={this.handleSubmitOld}>Submit</Button>
                    </div>
                  ):(
                    <div>
                      <FormGroup>
                        <Label>New Email</Label>
                        <Input type="text" name="newEmail" value={this.state.newEmail} placeholder="New Email" onChange={this.handleInputChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label>New Username</Label>
                        <Input type="text" name="newUsername" value={this.state.newUsername} placeholder="New Username" onChange={this.handleInputChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label>New Password</Label>
                        <Input type="password" name="newPassword" value={this.state.newPassword} placeholder="New Password" onChange={this.handleInputChange} />
                      </FormGroup>
                      <Button color="danger" onClick={this.handleDeleteAccount}>Delete Account</Button>
                      {' '}
                      <Button color="success" onClick={this.handleUpdateAccount}>Update Account</Button>
                      {' '}
                      <Button color="secondary" onClick={this.handleCancel}>Cancel</Button>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Account;
