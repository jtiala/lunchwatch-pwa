import { createMuiTheme } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';
import green from 'material-ui/colors/green';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: green[800],
    },
    tonalOffset: 0.1,
  },
});

export default Theme;
