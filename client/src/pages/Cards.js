import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    maxHeight: 345,
  },
  media: {
    height: 300,
    maxWidth: 300,
  },
};

class Cards extends Component {
  
  render() {
    const { classes } = this.props;
      return (
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={null}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Lizard
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    }
  }


export default withStyles(styles)(Cards);