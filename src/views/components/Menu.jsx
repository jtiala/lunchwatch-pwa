import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import LocationIcon from 'material-ui-icons/LocationOn';
import InfoIcon from 'material-ui-icons/Info';
import lightGreen from 'material-ui/colors/lightGreen';
import MenuItem from './MenuItem';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit,
    padding: 0,
    color: theme.palette.text.primary,
    '@media (max-width: 599px)': {
      margin: theme.spacing.unit / 2,
    },
  },
  header: {
    padding: theme.spacing.unit,
    background: theme.palette.primary.light,
    borderRadius: '2px 2px 0 0',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chain: {
    flex: 1,
    margin: `0 ${theme.spacing.unit}px`,
    padding: 0,
    color: theme.palette.grey[800],
    lineHeight: '1em',
    alignSelf: 'flex-end',
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
    margin: `0 0 ${theme.spacing.unit / 2}px ${theme.spacing.unit / 2}px`,
    height: 18,
    alignSelf: 'flex-start',
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
      fontSize: theme.typography.pxToRem(10),
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
  noItems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.unit,
    background: lightGreen[200],
    color: theme.palette.text.secondary,
    borderRadius: '0 0 2px 2px',
    '& svg': {
      height: 18,
      width: 18,
      marginRight: theme.spacing.unit,
    },
    '& p': {
      flex: 1,
      fontSize: theme.typography.pxToRem(12),
    },
  },
});

const Menu = props => (
  <Fade
    in={!props.scrolling || !props.loading}
  >
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
            label={`${parseFloat(props.menu.get('distance')).toFixed(1)} km`}
            className={props.classes.distance}
          />
        </div>
        <div className={props.classes.flex}>
          <Typography variant="title" className={props.classes.restaurant} gutterBottom>{props.menu.getIn(['restaurant', 'name'])}</Typography>
        </div>
      </header>
      <section>
        {props.menu.get('menuItems').size < 1 ?
          <div className={props.classes.noItems}>
            <InfoIcon />
            <Typography>{props.t('noMenuAvailable')}</Typography>
          </div> :
          props.menu.get('menuItems').map(menuItem => (
            <div key={menuItem.get('id')} className={props.classes.menuItem}>
              <MenuItem menuItem={menuItem} />
            </div>
          ))}
      </section>
    </Paper>
  </Fade>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  menu: PropTypes.instanceOf(Map).isRequired,
  scrolling: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate('menus'),
  withStyles(styles),
)(Menu);
