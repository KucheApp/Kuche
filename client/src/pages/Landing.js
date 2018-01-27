import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../api";

import "./Landing.css";
import logo from "../imgs/kuche-white.png";


class Landing extends Component {
  state = {
    username: "",
    password: "",
    registerOpen: false,
    registerUsername: "",
    registerDisplayName: "",
    registerPassword: "",
    goToApp: false
  };

  handleInputChange = event => {
    let {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    if (this.state.registerOpen) {
      this.setState({
        registerOpen: false
      });
    } else {
      API.ResetToken(this.state.username, this.state.password)
      .then(token => {
        API.GetUsername(this.state.username, this.state.password)
        .then(username => {
          this.setState({goToApp: true});
        })
      })
    }
  };

  handleRegister = () => {
    if (this.state.registerOpen) {
      let rUsername = this.state.registerUsername;
      let rDisplayName = this.state.registerDisplayName;
      let rPassword = this.state.registerPassword;
      if (
        rUsername.length    >  0 &&
        rDisplayName.length >  0 &&
        rPassword.length    >= 8
      ) {
            API.RegisterNewUser(rUsername, rPassword, rDisplayName)
            .then(token => {
              this.setState({goToApp: true});
            })
          }
    } else {
      this.setState({
        registerOpen: true
      });
    }
  };

  autoLoadCredentials = () => {
    let savedEmail = API.GetEmail();
    if (savedEmail !== null) {
      this.setState({username: savedEmail})
    }
    let savedToken = API.GetToken();
    if (savedToken !== null) {
      API.GetUsername()
      .then(username => {
        this.setState({goToApp: true});
      })
      .catch(err => console.log)
    }
  }

  handleKeyPress = (event) => {
    let key = event.key;
    let target = event.target;
    switch (key) {
      case "Enter":
        switch (target.name) {
          case "username":
          case "password":
            this.handleLogin();
            break;
          default:
            this.handleRegister();
            break;
        }
        break
      default:
        return;
    }
  };

  componentDidMount() {
    this.autoLoadCredentials();
  };

  render() {
    if (this.state.goToApp) {
      return (<Redirect to="/kitchen" />);
    }
    let logInBtn = <LoginButton text="Log In" onClick={this.handleLogin} />;
    let registerBtn = <LoginButton text="Register" onClick={this.handleRegister} />;
    return (

      <div className="Landing">

        <header className="Landing-Header">
          <img src={logo} className="Landing-Logo" alt="Kuche Logo" />
        </header>
        <div className="pageapp-login">
          {
            !this.state.registerOpen ? (
              // Log In Form
              <div>
                <LoginInput
                  name="username" placeholder="Email"
                  icon="envelope" type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
                <LoginInput
                  name="password" placeholder="Password"
                  icon="lock" type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
                {logInBtn}
                {registerBtn}
              </div>
            ) : (
              // Register Form
              <div>
                {logInBtn}
                <LoginInput
                  name="registerUsername" placeholder="Email"
                  icon="envelope" type="text"
                  value={this.state.registerUsername}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
                <LoginInput
                  name="registerDisplayName" placeholder="Display Name"
                  icon="user" type="text"
                  value={this.state.registerDisplayName}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
                <LoginInput
                  name="registerPassword" placeholder="Password"
                  icon="lock" type="password"
                  value={this.state.registerPassword}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
                {registerBtn}
              </div>
            )
          }
        </div>
      </div>
    );
  };
};

const LoginInput = ({name, icon, type, value, placeholder, onChange, onKeyPress}) => (
  <div className="pageapp-login-input">
    <i className={"login-icon fa fa-" + icon} />
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} onKeyPress={onKeyPress} />
  </div>
);

const LoginButton = ({text, onClick}) => (
  <div className="pageapp-login-links">
    <a href="javascript:undefined" className="landing-login-button" onClick={onClick}>{text}</a>
    <div className="clear" />
  </div>
);

export default Landing;
