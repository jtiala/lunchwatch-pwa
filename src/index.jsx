import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import configureStore from './state/store';
import theme from './views/themes/theme';
import App from './views/App';

const store = configureStore();

const Root = () => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ReduxProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
