import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItemComponent from './MenuItemComponent';

const styles = theme => ({
  root: {
    listStyleType: 'none',
    color: theme.palette.text.secondary,
  },
});

const MenuItem = ({ classes, menuItem }) => (
  <ul className={classes.root}>
    {menuItem.menuItemComponents.map(menuItemComponent => (
      <MenuItemComponent key={menuItemComponent.id} menuItemComponent={menuItemComponent} />
    ))}
  </ul>
);

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItem: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuItem);
