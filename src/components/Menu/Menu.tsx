import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
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
import orange from "@material-ui/core/colors/orange";

import theme from "../../defaultTheme";
import { useAppDispatch, useAppState, AppActionTypes } from "../../appState";
import MenuItem, { Props as MenuItemProps } from "./MenuItem";

const useStyles = makeStyles(theme => ({
  menu: {
    margin: 0,
    padding: 0,
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

export interface Props {
  id: number;
  restaurant: RestaurantProps;
  menuItems: MenuItemProps[];
}

interface RestaurantProps {
  id: number;
  distance: number;
  chain: string;
  name: string;
  url?: string;
}

const Menu: React.FC<Props> = ({ restaurant, menuItems }) => {
  const classes = useStyles(theme);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { favorites } = useAppState();
  const isFavorite = favorites.includes(restaurant.id);

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
          id: restaurant.id
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
          id: restaurant.id
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
