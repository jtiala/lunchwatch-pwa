import { makeStyles } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lightBlue from "@material-ui/core/colors/lightBlue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import amber from "@material-ui/core/colors/amber";
import pink from "@material-ui/core/colors/pink";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles(theme => ({
  menuItem: {
    color: theme.palette.text.secondary,
    listStyleType: "none",
    margin: 0,
    padding: theme.spacing(1, 2),
    borderLeft: `${theme.spacing(1)}px solid transparent`,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    transition: theme.transitions.create(["background"], {
      duration: theme.transitions.duration.complex
    }),
    "&:last-child": {
      borderBottom: "none",
      "& ul": {
        borderRadius: "0 0 2px 2px"
      }
    },
    "&.normal_meal": {
      borderLeftColor: brown[200]
    },
    "&.vegetarian_meal": {
      borderLeftColor: lightGreen[200]
    },
    "&.light_meal": {
      borderLeftColor: lightBlue[200]
    },
    "&.special_meal": {
      borderLeftColor: deepOrange[200]
    },
    "&.dessert": {
      borderLeftColor: pink[200]
    },
    "&.breakfast": {
      borderLeftColor: amber[200]
    },
    "&.lunch_time": {
      paddingLeft: 0,
      background: lightGreen[200],
      "& p": {
        fontSize: "0.75rem"
      },
      "&.favorite": {
        background: orange[300]
      }
    },
    "&.information": {
      paddingLeft: 0,
      background: lightGreen[200],
      "& p": {
        fontSize: "0.75rem"
      },
      "&.favorite": {
        background: orange[300]
      }
    },
    "&.price_information": {
      paddingLeft: 0,
      background: lightGreen[200],
      "& p": {
        fontSize: "0.75rem"
      }
    }
  }
}));

export default useStyles;
