import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 0,
    display: "flex",
    flexBasis: 180,
    "& svg": {
      color: "rgba(255,255,255,0.75)"
    },
    "& > *": {
      color: "rgba(255,255,255,0.75)"
    }
  }
}));

export default useStyles;
