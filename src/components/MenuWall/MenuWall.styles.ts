import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  center: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4)
  },
  card: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    "& span:last-child": {
      color: "rgba(255, 255, 255, 0.6)"
    }
  },
  masonry: {
    display: "flex",
    width: "auto",
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0.5)
    }
  },
  masonryColumn: {
    backgroundClip: "padding-box",
    "& > *": {
      margin: theme.spacing(1, 1, 2, 1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(0.5, 0.5, 1, 0.5)
      }
    }
  }
}));

export default useStyles;
