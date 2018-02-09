import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
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
  loading: {
    display: 'none',
  },
  progress: {
    margin: theme.spacing.unit,
  },
});

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.timer = null;

    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <Fade
            in={this.state.loading}
            style={{
              transitionDelay: this.state.loading ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <div>
              <span className={this.props.classes.loading} role="alert" aria-busy="true">{this.props.t('loading')}...</span>
              <CircularProgress className={this.props.classes.progress} size={64} />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate(),
  withStyles(styles),
)(Spinner);
