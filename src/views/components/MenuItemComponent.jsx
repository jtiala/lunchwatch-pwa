import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
  },
  text: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

const MenuItemComponent = props => (
  <li className={props.classes.root}>
    <Typography className={props.classes.text} variant={props.menuItemComponent.get('type') === 'name' ? 'body2' : 'body1'} gutterBottom>{props.menuItemComponent.get('value')}</Typography>
  </li>
);

MenuItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItemComponent: PropTypes.instanceOf(Map).isRequired,
};

export default withStyles(styles)(MenuItemComponent);
