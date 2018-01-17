import React, { Component } from "react";
// import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";

// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import API from "../api";

import ButtonAppBar from "../components/Nav";

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
    
    <div className={classes.root}>
    <ButtonAppBar />

        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <h1>Counter</h1>
            <p>Where your fruit ripens and commonly used items find their home</p>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
            <Grid item xs={1} sm={1} md={1} lg={3}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={6}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Bananas</Typography>
                    <Typography className={classes.secondaryHeading}>I am a banana</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Info about bananas here!
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={3}></Grid>

            <Grid item xs={1} sm={1} md={1} lg={3}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={6}>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Oranges</Typography>
                    <Typography className={classes.secondaryHeading}>
                    We are orange.
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Oranges are sweet cuz they are from Florida ;)
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={3}></Grid>

            <Grid item xs={1} sm={1} md={1} lg={3}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={6}>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Onions</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Ogres are like onions...
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    ...cuz they have layers!
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={3}>
            </Grid>
        </Grid>
      </div>
    );
  }
}

// ControlledExpansionPanels.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ControlledExpansionPanels);