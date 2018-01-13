import React, { Component } from "react";

import "./Landing.css";

import logo from "../imgs/kuche-white.png";

class Landing extends Component {
  state = {
    username: "",
    password: "",
    registerOpen: false,
    registerUsername: "",
    registerDisplayName: "",
    registerPassword: ""
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
      // do API call
    }
  };

  handleRegister = () => {
    if (this.state.registerOpen) {
      // do API call
    } else {
      this.setState({
        registerOpen: true
      });
    }
  };

  render() {
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
                  name="username" placeholder="Username"
                  icon="envelope" type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
                <LoginInput
                  name="password" placeholder="Password"
                  icon="lock" type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                {logInBtn}
                {registerBtn}
              </div>
            ) : (
              // Register Form
              <div>
                {logInBtn}
                <LoginInput
                  name="registerUsername" placeholder="Username"
                  icon="envelope" type="text"
                  value={this.state.registerUsername}
                  onChange={this.handleInputChange}
                />
                <LoginInput
                  name="registerDisplayName" placeholder="Display Name"
                  icon="envelope" type="text"
                  value={this.state.registerDisplayName}
                  onChange={this.handleInputChange}
                />
                <LoginInput
                  name="registerPassword" placeholder="Password"
                  icon="envelope" type="password"
                  value={this.state.registerPassword}
                  onChange={this.handleInputChange}
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

const LoginInput = ({name, icon, type, value, placeholder, onChange}) => (
  <div className="pageapp-login-input">
    <i className={"login-icon fa fa-" + icon} />
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
  </div>
);

const LoginButton = ({text, onClick}) => (
  <div className="pageapp-login-links">
    <a href="javascript:undefined" className="landing-login-button" onClick={onClick}>{text}</a>
    <div className="clear" />
  </div>
);

export default Landing;
