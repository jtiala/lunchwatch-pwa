import React from 'react';
import { connect } from 'react-redux';

import TopBar from '../components/TopBar';

const Header = () => (
  <header>
    <TopBar />
  </header>
);

export default connect()(Header);
