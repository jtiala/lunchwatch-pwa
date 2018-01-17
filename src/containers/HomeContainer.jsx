import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import { increaseCounter } from '../actions/Actions';

class HomeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      loading: false,
    };
  }

  render() {
    return (
      <section>
        <Button raised color="primary" onClick={this.props.increaseCounter}>
          {this.props.counter}
        </Button>
      </section>
    );
  }
}

HomeContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  increaseCounter: () => dispatch(increaseCounter(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
