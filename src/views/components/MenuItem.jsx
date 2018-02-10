import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { withStyles } from 'material-ui/styles';
import brown from 'material-ui/colors/brown';
import lightGreen from 'material-ui/colors/lightGreen';
import lightBlue from 'material-ui/colors/lightBlue';
import deepOrange from 'material-ui/colors/deepOrange';
import amber from 'material-ui/colors/amber';
import pink from 'material-ui/colors/pink';
import MenuItemComponent from './MenuItemComponent';

const styles = theme => ({
  root: {
    listStyleType: 'none',
    color: theme.palette.text.secondary,
    borderLeft: `${theme.spacing.unit}px solid transparent`,
    margin: 0,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,
    '&.normal_meal': {
      borderLeftColor: brown[200],
    },
    '&.vegetarian_meal': {
      borderLeftColor: lightGreen[200],
    },
    '&.light_meal': {
      borderLeftColor: lightBlue[200],
    },
    '&.special_meal': {
      borderLeftColor: deepOrange[200],
    },
    '&.dessert': {
      borderLeftColor: pink[200],
    },
    '&.breakfast': {
      borderLeftColor: amber[200],
    },
    '&.lunch_time': {
      paddingLeft: 0,
      background: lightGreen[200],
      '& p': {
        color: theme.palette.grey[900],
      },
    },
    '&.information': {
      paddingLeft: 0,
      background: lightGreen[200],
      '& p': {
        color: theme.palette.grey[900],
      },
    },
    '&.price_information': {
      paddingLeft: 0,
      background: lightGreen[200],
      '& p': {
        color: theme.palette.grey[900],
      },
    },
  },
});

const MenuItem = props => (
  <ul className={`${props.classes.root} ${props.menuItem.get('type')}`}>
    {props.menuItem.get('menuItemComponents').map(menuItemComponent => (
      <MenuItemComponent
        key={menuItemComponent.get('id')}
        menuItemComponent={menuItemComponent}
        menuItemType={props.menuItem.get('type')}
      />
    ))}
  </ul>
);

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItem: PropTypes.instanceOf(Map).isRequired,
};

export default withStyles(styles)(MenuItem);
