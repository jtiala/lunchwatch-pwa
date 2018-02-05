import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import theme from '../themes/theme';
import LocationSelector from './LocationSelector';
import DateSelector from './DateSelector';

const styles = {
  root: {
    width: '100%',
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

const BottomBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.location}>
          <LocationSelector upward />
        </div>
        <div className={classes.dateAndLanguage}>
          <DateSelector />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);
