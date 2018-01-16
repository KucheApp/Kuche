import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import SvgIcon from 'material-ui-icons/AddAlarm';
import styles from '../styles/FooterTest.css';

class FooterWithIcons extends Component {
  render() {
    return (
      <div>
        FooterTest
        <SvgIcon className="test" />
      </div>
    );
  }
}

export default FooterWithIcons;