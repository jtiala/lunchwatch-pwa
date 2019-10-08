import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/LocationOn";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

import {
  useAppDispatch,
  useAppState,
  AppActionTypes
} from "../../state/appState";
import { MenuItemType } from "../../models/MenuItem";
import { MenuItemComponentType } from "../../models/MenuItemComponent";
import { Props } from "./Menu.interfaces";
import useStyles from "./Menu.styles";
import MenuItem from "../MenuItem/MenuItem";

const Menu: React.FC<Props> = ({ restaurant, menuItems }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { favorites } = useAppState();
  const isFavorite =
    restaurant && restaurant.id ? favorites.includes(restaurant.id) : false;

  const chain = (
    <Typography
      className={`${classes.chain} ${isFavorite && "favorite"}`}
      variant="h3"
    >
      {restaurant && restaurant.chain}
    </Typography>
  );

  const name = (
    <Typography className={classes.name} variant="h2">
      {restaurant && restaurant.name && restaurant.url ? (
        <Link target="_blank" rel="noopener noreferrer" href={restaurant.url}>
          {restaurant.name}
        </Link>
      ) : restaurant && restaurant.name ? (
        restaurant.name
      ) : null}
    </Typography>
  );

  const favoriteButton = isFavorite ? (
    <IconButton
      aria-label={t("Remove from favorites")}
      className={classes.favoriteButton}
      onClick={() =>
        dispatch({
          type: AppActionTypes.REMOVE_FAVORITE,
          id: restaurant ? restaurant.id : undefined
        })
      }
    >
      <Star fontSize="inherit" />
    </IconButton>
  ) : (
    <IconButton
      aria-label={t("Add to favorites")}
      className={classes.favoriteButton}
      onClick={() =>
        dispatch({
          type: AppActionTypes.ADD_FAVORITE,
          id: restaurant ? restaurant.id : undefined
        })
      }
    >
      <StarBorder fontSize="inherit" />
    </IconButton>
  );

  const distanceChip = (
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
      className={`${classes.distance} ${isFavorite && "favorite"}`}
    />
  );

  return (
    <Fade in>
      <Paper className={classes.menu}>
        <header className={`${classes.header} ${isFavorite && "favorite"}`}>
          <Grid container direction="column">
            <Grid item>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item>{chain}</Grid>
                <Grid item className={classes.selfEnd}>
                  {favoriteButton}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item>{name}</Grid>
                <Grid item className={classes.selfEnd}>
                  {distanceChip}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </header>
        <section>
          {Array.isArray(menuItems) && menuItems.length ? (
            menuItems.map(menuItem => (
              <MenuItem
                key={`menu-${menuItem.id}`}
                {...menuItem}
                isFavorite={isFavorite}
              />
            ))
          ) : (
            <MenuItem
              type={MenuItemType.INFORMATION}
              menuItemComponents={[
                {
                  type: MenuItemComponentType.INFORMATION,
                  value: t("No details available")
                }
              ]}
            />
          )}
        </section>
      </Paper>
    </Fade>
  );
};

export default Menu;
