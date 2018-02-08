import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
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

const Menu = props => (
  <Paper className={props.classes.paper}>
    <Typography variant="subheading">{props.menu.getIn(['restaurant', 'chain'])}</Typography>
    <Typography variant="headline" gutterBottom>{props.menu.getIn(['restaurant', 'name'])}</Typography>
    <div>
      {props.menu.get('menuItems').map(menuItem => (
        <MenuItem key={menuItem.get('id')} menuItem={menuItem} />
      ))}
    </div>
  </Paper>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.instanceOf(Map).isRequired,
};

export default withStyles(styles)(Menu);
