import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import Store from './stores/Store';
import Theme from './themes/Theme';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import HomeContainer from './containers/HomeContainer';

const App = () => (
  <Provider store={Store}>
    <MuiThemeProvider theme={Theme}>
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
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
