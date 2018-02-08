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

const TopBar = props => (
  <div className={props.classes.root}>
    <AppBar position="static" className={props.classes.bar}>
      <Toolbar className={props.classes.toolbar}>
        <div className={props.classes.logo}>
          <Typography variant="title" color="inherit">
            <span role="img" aria-label="watch">🕑</span>
            &nbsp;LunchWatch
            <sup className={props.classes.beta}>Beta</sup>
          </Typography>
        </div>
        <div className={props.classes.language}>
          <LanguageSelector
            language={props.language}
            changeLanguage={props.changeLanguage}
          />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

TopBar.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(TopBar);
