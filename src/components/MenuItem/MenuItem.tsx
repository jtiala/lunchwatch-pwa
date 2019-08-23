import React from "react";

import useStyles from "./MenuItem.styles";
import { Props } from "./MenuItem.interfaces";
import MenuItemComponent from "../MenuItemComponent/MenuItemComponent";

const MenuItem: React.FC<Props> = ({
  type,
  menuItemComponents,
  isFavorite
}) => {
  const classes = useStyles();

  return (
    <ul
      className={`${classes.menuItem} ${String(
        type
      ).toLowerCase()} ${isFavorite && "favorite"}`}
    >
      {Array.isArray(menuItemComponents) &&
        menuItemComponents.map(menuItemComponent => (
          <MenuItemComponent
            key={`menu-${menuItemComponent.id}`}
            {...menuItemComponent}
            isFavorite={isFavorite}
            parentType={type}
          />
        ))}
    </ul>
  );
};

export default MenuItem;
