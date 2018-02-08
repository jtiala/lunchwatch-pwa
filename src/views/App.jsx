import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import ControlBarContainer from './containers/ControlBarContainer';
import MenuWallContainer from './containers/MenuWallContainer';

const App = () => (
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

export default App;
