import React from "react";
import Typography from "@material-ui/core/Typography";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import InfoIcon from "@material-ui/icons/Info";

import { MenuItemComponentType } from "../../queries/interfaces";
import useStyles from "./MenuItemComponent.styles";
import { Props } from "./MenuItemComponent.interfaces";

const MenuItemComponent: React.FC<Props> = ({
  id,
  type,
  value,
  isFavorite,
  parentType
}) => {
  const classes = useStyles();

  const getIcon = (menuItemType: MenuItemComponentType) => {
    switch (menuItemType) {
      case MenuItemComponentType.LUNCH_TIME:
        return <WatchLaterIcon />;
      case MenuItemComponentType.PRICE_INFORMATION:
        return <EuroSymbolIcon />;
      case MenuItemComponentType.INFORMATION:
        return <InfoIcon />;
      default:
        return undefined;
    }
  };

  const contentRows = value ? value.split("\n") : [];

  const content = contentRows.length
    ? contentRows.map((item, key) => (
        <React.Fragment key={`menuItemComponent-${id}-${key}`}>
          {item}
          {key + 1 !== contentRows.length ? <br /> : null}
        </React.Fragment>
      ))
    : null;

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
        variant={type === MenuItemComponentType.NAME ? "subtitle2" : "body2"}
      >
        {content}
      </Typography>
    </li>
  );
};

export default MenuItemComponent;
