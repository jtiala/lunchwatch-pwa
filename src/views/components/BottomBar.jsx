import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import theme from '../themes/theme';
import LocationSelector from './LocationSelector';
import DateSelector from './DateSelector';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar: {
    backgroundColor: theme.palette.primary.light,
  },
  location: {
    flex: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  dateAndLanguage: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
};

const BottomBar = props => (
  <div className={props.classes.root}>
    <AppBar position="static" className={props.classes.bar}>
      <Toolbar className={props.classes.toolbar}>
        <div className={props.classes.location}>
          <LocationSelector
            upward
            address={props.address}
            changeLocation={props.changeLocation}
          />
        </div>
        <div className={props.classes.dateAndLanguage}>
          <DateSelector
            date={props.date}
            changeDate={props.changeDate}
          />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

BottomBar.propTypes = {
  address: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
};

export default withStyles(styles)(BottomBar);
