import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Fade from 'material-ui/transitions/Fade';

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
    color: theme.palette.primary.dark,
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
});

class LoadMenusButton extends React.Component {
  constructor(props) {
    super(props);

    this.timer = null;

    this.state = {
      loading: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleClick() {
    this.props.loadMore();

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 500);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <Button
            variant="fab"
            color="secondary"
            disabled={!this.props.moreToLoad || this.props.loading}
            onClick={this.handleClick}
            aria-label={this.props.t('loadMore')}
            aria-busy={this.props.loading}
          >
            <AddIcon />
          </Button>
          {this.props.loading &&
            <Fade
              in={this.state.loading}
              style={{
                transitionDelay: this.state.loading ? '800ms' : '0ms',
              }}
              unmountOnExit
            >
              <CircularProgress size={68} className={this.props.classes.progress} />
            </Fade>
          }
        </div>
      </div>
    );
  }
}

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
