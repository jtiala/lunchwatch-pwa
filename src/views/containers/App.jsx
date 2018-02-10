import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Events as ScrollEvents } from 'react-scroll';
import Reboot from 'material-ui/Reboot';
import { uiOperations } from '../../state/ducks/ui';
import ControlBarContainer from './ControlBarContainer';
import MenuWallContainer from './MenuWallContainer';

class App extends React.Component {
  componentDidMount() {
    ScrollEvents.scrollEvent.register('begin', () => {
      this.props.uiStartScrolling();
    });

    ScrollEvents.scrollEvent.register('end', () => {
      this.props.uiStopScrolling();
    });
  }

  componentWillUnmount() {
    ScrollEvents.scrollEvent.remove('begin');
    ScrollEvents.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <Reboot />
        <ControlBarContainer type="topBar" />

        <Router>
          <Switch>
            <Route component={MenuWallContainer} />
          </Switch>
        </Router>

        <ControlBarContainer type="bottomBar" />
      </div>
    );
  }
}

App.propTypes = {
  uiStartScrolling: PropTypes.func.isRequired,
  uiStopScrolling: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  uiStartScrolling: uiOperations.startScrolling,
  uiStopScrolling: uiOperations.stopScrolling,
};

export default connect(null, mapDispatchToProps)(App);
