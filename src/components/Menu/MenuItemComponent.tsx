import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import InfoIcon from "@material-ui/icons/Info";

import theme from "../../defaultTheme";

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

const getIcon = (menuItemType: string) => {
  switch (menuItemType) {
    case "LUNCH_TIME":
      return <WatchLaterIcon />;
    case "PRICE_INFORMATION":
      return <EuroSymbolIcon />;
    case "INFORMATION":
      return <InfoIcon />;
    default:
      return undefined;
  }
};

export interface Props {
  id?: number;
  type?: string;
  value?: string;
  isFavorite?: boolean;
  parentType?: string;
}

const MenuItemComponent: React.FC<Props> = ({
  type,
  value,
  isFavorite,
  parentType
}) => {
  const classes = useStyles(theme);

  return (
    <li
      className={`${classes.component} ${String(
        type
      ).toLowerCase()} parent-${String(
        parentType
      ).toLowerCase()} ${isFavorite && "favorite"}`}
    >
      {type && getIcon(type)}
      <Typography
        className={classes.text}
        variant={type === "NAME" ? "subtitle2" : "body2"}
      >
        {value}
      </Typography>
    </li>
  );
};

export default MenuItemComponent;
