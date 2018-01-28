import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomBar from '../components/BottomBar';

const styles = {
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
};

const Footer = ({ classes }) => (
  <footer className={classes.root}>
    <BottomBar />
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
