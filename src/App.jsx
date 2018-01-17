import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Reboot from 'material-ui/Reboot';
import Store from './stores/Store';

import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import HomeContainer from './containers/HomeContainer';

ReactDOM.render(
  <Provider store={Store}>
    <div>
      <Reboot />
      <HeaderContainer />

      <Router>
        <Switch>
          <Route component={HomeContainer} />
        </Switch>
      </Router>

      <FooterContainer />
    </div>
  </Provider>,
  document.getElementById('app'),
);
