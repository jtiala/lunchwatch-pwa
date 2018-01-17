import React from 'react';
import { connect } from 'react-redux';

import TopBar from '../components/TopBar';

const HeaderContainer = () => (
  <header>
    <TopBar />
  </header>
);

export default connect()(HeaderContainer);
