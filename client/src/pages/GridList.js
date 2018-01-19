import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import tileData from './GridListTileData';
import ScrollArea from 'react-scrollbar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width: '100%',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

});

class MyGridList extends Component {
  
  render() {
  
      const { classes } = this.props;

    return (
      <ScrollArea
        horizontal={true}
      >
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={2}>
              {tileData.map(tile => (
                <GridListTile key={tile.img}>
                  <img className={styles.image} src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

      </ScrollArea>
      
    );
  }
}

export default withStyles(styles)(MyGridList);