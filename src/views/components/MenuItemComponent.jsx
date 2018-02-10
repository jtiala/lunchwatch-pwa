import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import WatchLaterIcon from 'material-ui-icons/WatchLater';
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& svg': {
      height: 18,
      width: 18,
      marginRight: theme.spacing.unit,
    },
  },
  text: {
    flex: 1,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

const MenuItemComponent = (props) => {
  let icon = null;

  switch (props.menuItemType) {
    case 'lunch_time':
      icon = <WatchLaterIcon />;
      break;
    case 'price_information':
      icon = <EuroSymbolIcon />;
      break;
    case 'information':
      icon = <InfoIcon />;
      break;
    default:
      icon = null;
  }

  return (
    <li>
      <div className={props.classes.flex}>
        {icon}
        <Typography className={props.classes.text} variant={props.menuItemComponent.get('type') === 'name' ? 'body2' : 'body1'} gutterBottom>{props.menuItemComponent.get('value')}</Typography>
      </div>
    </li>
  );
};

MenuItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItemComponent: PropTypes.instanceOf(Map).isRequired,
  menuItemType: PropTypes.string.isRequired,
};

export default withStyles(styles)(MenuItemComponent);
