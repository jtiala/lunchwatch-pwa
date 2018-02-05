import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import LanguageSelector from './LanguageSelector';

const styles = () => ({
  root: {
    width: '100%',
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: 16,
  },
  beta: {
    fontSize: '8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.75)',
  },
  language: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
});

const TopBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <Typography variant="title" color="inherit">
            <span role="img" aria-label="watch">🕑</span>
            &nbsp;LunchWatch
            <sup className={classes.beta}>Beta</sup>
          </Typography>
        </div>
        <div className={classes.language}>
          <LanguageSelector />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
