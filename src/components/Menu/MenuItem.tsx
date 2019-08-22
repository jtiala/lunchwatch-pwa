import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lightBlue from "@material-ui/core/colors/lightBlue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import amber from "@material-ui/core/colors/amber";
import pink from "@material-ui/core/colors/pink";

import theme from "../../defaultTheme";
import MenuItemComponent, {
  Props as MenuItemComponentProps
} from "./MenuItemComponent";

const useStyles = makeStyles(theme => ({
  menuItem: {
    color: theme.palette.text.secondary,
    listStyleType: "none",
    margin: 0,
    padding: theme.spacing(1, 2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    "&:last-child": {
      borderBottom: "none",
      "& ul": {
        borderRadius: "0 0 2px 2px"
      }
    },
    borderLeft: `${theme.spacing(1)}px solid transparent`,
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
      }
    },
    "&.information": {
      paddingLeft: 0,
      background: lightGreen[200],
      "& p": {
        fontSize: "0.75rem"
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

export interface Props {
  id?: number;
  type?: string;
  menuItemComponents?: MenuItemComponentProps[];
}

const MenuItem: React.FC<Props> = ({ type, menuItemComponents }) => {
  const classes = useStyles(theme);

  return (
    <ul className={`${classes.menuItem} ${String(type).toLowerCase()}`}>
      {Array.isArray(menuItemComponents) &&
        menuItemComponents.map(menuItemComponent => (
          <MenuItemComponent
            key={`menu-${menuItemComponent.id}`}
            {...menuItemComponent}
          />
        ))}
    </ul>
  );
};

export default MenuItem;
