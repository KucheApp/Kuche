import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import SvgIcon from 'material-ui-icons/AddAlarm';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '70%',
  },
  iconHover: {
    '&:hover': {
      fill: green[200],
    },
  },
};

const HomeIcon = (props) => {
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
};

class FooterWithIcons extends Component {

  

  render() {
    return (
      <div>
        FooterTest
        <SvgIcon />
      </div>
    );
  }
}

export default FooterWithIcons;