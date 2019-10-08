import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    width: 900,
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      width: "95%"
    }
  }
}));

export default useStyles;
