import React, { Component } from 'react';
// import { withStyles } from 'material-ui/styles';
// import green from 'material-ui/colors/green';
import '../styles/FooterTest.css';
import SvgIcon from 'material-ui-icons/AddAlarm';



class Footer extends Component {
  render() {
    return (
      <div>
        <SvgIcon className="test" />
      </div>
    );
  }
}

export default Footer;