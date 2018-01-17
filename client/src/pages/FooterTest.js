import React, { Component } from 'react';
// import { withStyles } from 'material-ui/styles';
// import green from 'material-ui/colors/green';
import '../styles/FooterTest.css';
import SvgIcon from 'material-ui-icons/AddAlarm';
import Github from 'react-icons/lib/fa/github';



class Footer extends Component {
  render() {
    return (
      <div>
        <SvgIcon />
        <Github className="github" />
      </div>
    );
  }
}

export default Footer;