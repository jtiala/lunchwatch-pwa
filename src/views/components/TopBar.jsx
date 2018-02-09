import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';
import windowSize from 'react-window-size';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import LocationSelector from './LocationSelector';
import DateSelector from './DateSelector';
import LanguageSelector from './LanguageSelector';
import defaultTheme from '../themes/defaultTheme';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appbar: {
    position: 'static',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  logo: {
    flex: 1,
    order: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: 16,
    '& sup': {
      fontSize: '8px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)',
    },
    '& h1': {
      color: theme.palette.common.white,
    },
  },
  location: {
    flex: 3,
    order: 2,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  date: {
    order: 3,
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  language: {
    order: 4,
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
});

const TopBar = (props) => {
  const elements = [
    <div key="topbar-logo" className={props.classes.logo}>
      <Typography variant="headline">
        Lunch<strong>Watch</strong>
        <sup>Beta</sup>
      </Typography>
    </div>,
    <div key="topbar-language" className={props.classes.language}>
      <LanguageSelector
        language={props.language}
        changeLanguage={props.changeLanguage}
      />
    </div>,
  ];

  if (props.windowWidth >= defaultTheme.breakpoints.values.md) {
    elements.push((
      <div key="topbar-location" className={props.classes.location}>
        <LocationSelector
          address={props.address}
          changeLocation={props.changeLocation}
        />
      </div>
    ));

    elements.push((
      <div key="topbar-date" className={props.classes.date}>
        <DateSelector
          date={props.date}
          changeDate={props.changeDate}
        />
      </div>
    ));
  }

  return (
    <div className={props.classes.root}>
      <AppBar className={props.classes.appbar}>
        <Toolbar>
          {elements}
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
  address: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  language: PropTypes.string.isRequired,
  windowWidth: PropTypes.number.isRequired,
};

export default compose(
  windowSize,
  withStyles(styles),
)(TopBar);
