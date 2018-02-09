import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import green from 'material-ui/colors/green';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  progress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
});

const LoadMenusButton = props => (
  <div className={props.classes.root}>
    <div className={props.classes.wrapper}>
      <Button
        variant="fab"
        color="secondary"
        disabled={!props.moreToLoad || props.loading}
        onClick={props.loadMore}
        aria-label={props.t('loadMore')}
        aria-busy={props.loading}
      >
        <Icon>add</Icon>
      </Button>
      {props.loading && <CircularProgress size={68} className={props.classes.progress} />}
    </div>
  </div>
);

LoadMenusButton.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  moreToLoad: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate(),
  withStyles(styles),
)(LoadMenusButton);
