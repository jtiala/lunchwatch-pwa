import { makeStyles } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "auto",
    backgroundColor: lightGreen[50],
    padding: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    maxWidth: 600,
    marginTop: theme.spacing(3)
  },
  link: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none"
    }
  }
}));

export default useStyles;
