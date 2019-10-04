import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minWidth: 400,
    [theme.breakpoints.down("sm")]: {
      minWidth: "unset"
    }
  },
  textField: {
    margin: 0,
    "& svg": {
      color: "rgba(255,255,255,0.75)"
    },
    "& input": {
      color: "rgba(255,255,255,0.75)"
    }
  },
  autocompleteContainer: {
    position: "absolute",
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    width: 400,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "0 0 2px 2px",
    boxShadow:
      "0px 2px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14)",
    [theme.breakpoints.down("sm")]: {
      width: "unset",
      maxWidth: "90%"
    }
  },
  autocompleteItem: {
    cursor: "pointer",
    overflow: "hidden",
    borderTop: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    "& li": {
      padding: theme.spacing(0.5)
    },
    "& li h3": {
      color: theme.palette.grey[900]
    },
    "& li p": {
      color: theme.palette.primary.light
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  autocompleteItemActive: {
    backgroundColor: theme.palette.primary.light
  },
  autocompleteFooter: {
    borderRadius: "0 0 2px 2px",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.dark
  },
  autocompleteFooterImage: {
    display: "inline-block",
    width: 100
  },
  gpsFixedIcon: {
    cursor: 'pointer',
    "&:hover": {
      color: 'rgba(255, 255, 255, .9)'
    },
    "&:active": {
      opacity: .6
    }
  }
}));

export default useStyles;
