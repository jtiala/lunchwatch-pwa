import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { withStyles } from 'material-ui/styles';
import MenuItemComponent from './MenuItemComponent';

const styles = theme => ({
  root: {
    listStyleType: 'none',
    padding: 0,
    color: theme.palette.text.secondary,
  },
});

const MenuItem = props => (
  <ul className={props.classes.root}>
    {props.menuItem.get('menuItemComponents').map(menuItemComponent => (
      <MenuItemComponent key={menuItemComponent.get('id')} menuItemComponent={menuItemComponent} />
    ))}
  </ul>
);

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItem: PropTypes.instanceOf(Map).isRequired,
};

export default withStyles(styles)(MenuItem);
