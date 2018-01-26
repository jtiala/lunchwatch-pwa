import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import MenuItem from './MenuItem';

const styles = theme => ({
  paper: {
    margin: 10,
    padding: 16,
    color: theme.palette.text.primary,
  },
});

const Menu = ({ classes, menu }) => (
  <Paper className={classes.paper}>
    <Typography type="subheading">{menu.restaurant.chain}</Typography>
    <Typography type="headline" gutterBottom>{menu.restaurant.name}</Typography>
    <div>
      {menu.menuItems.map(menuItem => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  </Paper>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
