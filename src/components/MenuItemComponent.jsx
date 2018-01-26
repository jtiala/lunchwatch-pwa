import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
  },
});

const MenuItemComponent = ({ classes, menuItemComponent }) => (
  <li className={classes.root}>
    {menuItemComponent.value}
  </li>
);

MenuItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItemComponent: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuItemComponent);
