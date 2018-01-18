import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Cards from './Cards';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 150,
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