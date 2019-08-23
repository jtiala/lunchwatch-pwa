import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  grower: {
    flexGrow: 1
  }
}));

export default useStyles;
