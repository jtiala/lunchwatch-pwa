import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MuiThemeProvider } from 'material-ui/styles';
import configureStore from './state/store';
import defaultTheme from './views/themes/defaultTheme';
import App from './views/App';
import i18n from './i18n';

const store = configureStore();

const Root = () => (
  <ReduxProvider store={store}>
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={defaultTheme}>
        <App />
      </MuiThemeProvider>
    </I18nextProvider>
  </ReduxProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
