import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  component: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& svg": {
      height: 18,
      width: 18,
      marginRight: theme.spacing(1)
    },
    color: theme.palette.grey[700],
    "&.name": {
      color: theme.palette.grey[800]
    },
    "&.lunch_time.parent-lunch_time.favorite": {
      color: theme.palette.grey[800]
    },
    "&.price_information.parent-price_information.favorite": {
      color: theme.palette.grey[800]
    },
    "&.information.parent-information.favorite": {
      color: theme.palette.grey[800]
    }
  },
  text: {
    color: "inherit",
    flex: 1,
    overflowWrap: "anywhere",
    "&:last-child": {
      marginBottom: 0
    }
  }
}));

export default useStyles;
