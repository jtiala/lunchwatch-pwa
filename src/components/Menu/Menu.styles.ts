import { makeStyles } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles(theme => ({
  menu: {
    color: theme.palette.text.primary
  },
  header: {
    padding: theme.spacing(1.5, 1.5, 0.5, 1.5),
    background: theme.palette.primary.light,
    borderRadius: "2px 2px 0 0",
    "&.favorite": {
      background: orange[700]
    },
    transition: theme.transitions.create(["background", "color"], {
      duration: theme.transitions.duration.complex
    })
  },
  chain: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.grey[800],
    fontSize: "1rem",
    lineHeight: "1rem",
    overflowWrap: "anywhere",
    "&.favorite": {
      color: "rgba(255, 255, 255, 0.9)"
    }
  },
  name: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0.5),
    lineHeight: "1.3125rem",
    fontSize: "1.3125rem",
    fontWeight: 500,
    overflowWrap: "anywhere",
    "& > a": {
      color: theme.palette.common.white,
      "&:hover": {
        color: "rgba(255, 255, 255, 0.8)",
        textDecoration: "none"
      }
    }
  },
  distance: {
    marginBottom: theme.spacing(0.5),
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    height: 20,
    alignSelf: "flex-start",
    "& div": {
      background: theme.palette.secondary.dark,
      color: theme.palette.common.white,
      height: 20,
      width: 20,
      "& svg": {
        height: 12,
        width: 12
      }
    },
    "&.favorite": {
      background: theme.palette.grey[800],
      "& div": {
        background: theme.palette.grey[900]
      }
    },
    "& span": {
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(11),
      fontWeight: 500,
      padding: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  favoriteButton: {
    marginBottom: theme.spacing(0.5),
    padding: 1,
    color: theme.palette.grey[800]
  },
  selfEnd: {
    justifySelf: "flex-end"
  }
}));

export default useStyles;
