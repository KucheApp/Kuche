import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import DrawerLeft from './Drawer';
import Categories from './Categories';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class ButtonAppBar extends Component {
  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <DrawerLeft />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Kitchen
            </Typography>
              <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        <Categories />

      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);

// export default Kitchen
