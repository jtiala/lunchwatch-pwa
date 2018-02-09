import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  loading: {
    display: 'none',
  },
  progress: {
    margin: theme.spacing.unit,
  },
});

const Spinner = props => (
  <div className={props.classes.root}>
    <div className={props.classes.wrapper}>
      <span className={props.classes.loading} role="alert" aria-busy="true">{props.t('loading')}...</span>
      <CircularProgress className={props.classes.progress} size={50} />
    </div>
  </div>
);

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate(),
  withStyles(styles),
)(Spinner);
