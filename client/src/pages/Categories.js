import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Cards from './Cards';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import Freezer from '../imgs/freezer1.png';
import Fridge from '../imgs/fridge1.png';
import Pantry from '../imgs/pantry1.png';
import Counter from '../imgs/countertop.png';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 50,
    minWidth: 300,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Categories extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Cards />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Cards />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Cards />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Cards />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(Categories);