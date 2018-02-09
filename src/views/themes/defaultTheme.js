import { createMuiTheme } from 'material-ui/styles';
import lightGreen from 'material-ui/colors/lightGreen';
import deepOrange from 'material-ui/colors/deepOrange';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[500],
    },
    secondary: {
      main: deepOrange[500],
    },
    tonalOffset: 0.1,
  },
});

export default defaultTheme;
