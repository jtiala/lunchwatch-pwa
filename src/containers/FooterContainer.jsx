import React from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';

const FooterContainer = () => (
  <footer>
    <Typography type="title" color="inherit">
      LunchWatch
    </Typography>
  </footer>
);

export default connect()(FooterContainer);
