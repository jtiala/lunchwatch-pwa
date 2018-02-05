import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import Header from './containers/Header';
import Footer from './containers/Footer';
import MenuWall from './containers/MenuWall';

const App = () => (
  <div>
    <Reboot />
    <Header />

    <Router>
      <Switch>
        <Route component={MenuWall} />
      </Switch>
    </Router>

    <Footer />
  </div>
);

export default App;
