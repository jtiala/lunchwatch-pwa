import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import windowSize from 'react-window-size';
import moment from 'moment';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import LocationSelector from './LocationSelector';
import DateSelector from './DateSelector';
import defaultTheme from '../themes/defaultTheme';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
  },
  appbar: {
    position: 'static',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  toolbar: {
    backgroundColor: theme.palette.primary.light,
  },
  location: {
    flex: 1,
    order: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  date: {
    order: 2,
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
});

const BottomBar = (props) => {
  let element = null;

  if (props.windowWidth < defaultTheme.breakpoints.values.md) {
    element = (
      <div className={props.classes.root}>
        <AppBar className={props.classes.appbar}>
          <Toolbar className={props.classes.toolbar}>
            <div key="bottombar-language" className={props.classes.location}>
              <LocationSelector
                upward
                address={props.address}
                changeLocation={props.changeLocation}
              />
            </div>
            <div key="topbar-date" className={props.classes.date}>
              <DateSelector
                date={props.date}
                changeDate={props.changeDate}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return element;
};

BottomBar.propTypes = {
  address: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  windowWidth: PropTypes.number.isRequired,
};

export default compose(
  windowSize,
  withStyles(styles),
)(BottomBar);
