import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import LocationIcon from 'material-ui-icons/LocationOn';
import MenuItem from './MenuItem';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit,
    padding: 0,
    color: theme.palette.text.primary,
  },
  header: {
    padding: theme.spacing.unit,
    background: theme.palette.primary.light,
    borderRadius: '2px 2px 0 0',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  chain: {
    flex: 1,
    margin: `0 ${theme.spacing.unit}px`,
    padding: 0,
    color: theme.palette.grey[800],
  },
  restaurant: {
    flex: 1,
    margin: `0 ${theme.spacing.unit}px`,
    padding: 0,
    color: theme.palette.common.white,
  },
  distance: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    margin: theme.spacing.unit / 2,
    height: 18,
    '& div': {
      background: theme.palette.secondary.dark,
      color: theme.palette.common.white,
      height: 18,
      width: 18,
      '& svg': {
        height: 12,
        width: 12,
      },
    },
    '& span': {
      color: theme.palette.common.white,
      fontSize: 10,
      fontWeight: 500,
      padding: `0 ${theme.spacing.unit}px`,
    },
  },
  menuItem: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    '&:last-child': {
      borderBottom: 'none',
      '& ul': {
        borderRadius: '0 0 2px 2px',
      },
    },
  },
});

const Menu = props => (
  <Paper className={props.classes.paper}>
    <header className={props.classes.header}>
      <div className={props.classes.flex}>
        <Typography variant="subheading" className={props.classes.chain}>{props.menu.getIn(['restaurant', 'chain'])}</Typography>
        <Chip
          avatar={
            <Avatar>
              <LocationIcon />
            </Avatar>
          }
          label={`${parseFloat(props.menu.getIn(['restaurant', 'distance'])).toFixed(1)} km`}
          className={props.classes.distance}
        />
      </div>
      <div className={props.classes.flex}>
        <Typography variant="title" className={props.classes.restaurant} gutterBottom>{props.menu.getIn(['restaurant', 'name'])}</Typography>
      </div>
    </header>
    <section>
      {props.menu.get('menuItems').map(menuItem => (
        <div className={props.classes.menuItem}>
          <MenuItem key={menuItem.get('id')} menuItem={menuItem} />
        </div>
      ))}
    </section>
  </Paper>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.instanceOf(Map).isRequired,
};

export default withStyles(styles)(Menu);
