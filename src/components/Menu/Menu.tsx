import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LocationIcon from "@material-ui/icons/LocationOn";

import theme from "../../defaultTheme";
import MenuItem, { Props as MenuItemProps } from "./MenuItem";

const useStyles = makeStyles(theme => ({
  menu: {
    margin: 0,
    padding: 0,
    color: theme.palette.text.primary
  },
  header: {
    padding: theme.spacing(1),
    background: theme.palette.primary.light,
    borderRadius: "2px 2px 0 0"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  chain: {
    flex: 1,
    margin: theme.spacing(0, 1),
    padding: 0,
    color: theme.palette.grey[800],
    fontSize: "1rem",
    lineHeight: "1rem",
    alignSelf: "flex-end"
  },
  restaurant: {
    flex: 1,
    margin: theme.spacing(0.5, 1, 0, 1),
    padding: 0,
    color: theme.palette.common.white,
    lineHeight: "1rem",
    fontSize: "1.3125rem",
    fontWeight: 500
  },
  distance: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    margin: theme.spacing(0, 0, 0.5, 0.5),
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
    "& span": {
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(11),
      fontWeight: 500,
      padding: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}));

export interface Props {
  id?: number;
  restaurant?: RestaurantProps;
  menuItems?: MenuItemProps[];
}

interface RestaurantProps {
  id: number;
  distance: number;
  chain: string;
  name: string;
}

const Menu: React.FC<Props> = ({ restaurant, menuItems }) => {
  const classes = useStyles(theme);
  const { t } = useTranslation();

  return (
    <Fade in>
      <Paper className={classes.menu}>
        <header className={classes.header}>
          <div className={classes.flex}>
            <Typography className={classes.chain} variant="h3">
              {restaurant && restaurant.chain}
            </Typography>
            <Chip
              avatar={
                <Avatar>
                  <LocationIcon />
                </Avatar>
              }
              label={
                restaurant && restaurant.distance
                  ? `${restaurant.distance.toFixed(1)} km`
                  : null
              }
              className={classes.distance}
            />
          </div>
          <div className={classes.flex}>
            <Typography className={classes.restaurant} variant="h2">
              {restaurant && restaurant.name}
            </Typography>
          </div>
        </header>
        <section>
          {Array.isArray(menuItems) && menuItems.length ? (
            menuItems.map(menuItem => (
              <MenuItem key={`menu-${menuItem.id}`} {...menuItem} />
            ))
          ) : (
            <MenuItem
              type="information"
              menuItemComponents={[
                { type: "information", value: t("No details available") }
              ]}
            />
          )}
        </section>
      </Paper>
    </Fade>
  );
};

export default Menu;
