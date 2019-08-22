import React from "react";
import { useTranslation } from "react-i18next";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  Suggestion
} from "react-places-autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOn from "@material-ui/icons/LocationOn";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { useAppDispatch, useAppState, AppActionTypes } from "../../appState";
import theme from "../../defaultTheme";

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
  }
}));

const LocationPicker: React.FC = () => {
  const classes = useStyles(theme);
  const dispatch = useAppDispatch();
  const { address } = useAppState();
  const { t } = useTranslation();

  const handleSelect = (address: string) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        dispatch({
          type: AppActionTypes.SET_ADDRESS,
          address
        });
        dispatch({
          type: AppActionTypes.SET_LOCATION,
          location: latLng
        });
      })
      .catch(error => console.error("Location picker error", error));
  };

  const handleFocus = () =>
    dispatch({
      type: AppActionTypes.SET_ADDRESS,
      address: ""
    });

  const handleError = (status: string, clearSuggestions: Function) => {
    clearSuggestions();
  };

  const loadingItem = (
    <ListItem className={classes.autocompleteItem}>
      <ListItemText primary={t("Loading")} />
    </ListItem>
  );

  const footerItem = (
    <ListItem dense className={classes.autocompleteFooter}>
      <img
        className={classes.autocompleteFooterImage}
        src="powered-by-google-white.png"
        alt="Powered by Google"
      />
    </ListItem>
  );

  const suggestionItems = (
    suggestions: Readonly<Suggestion[]>,
    getSuggestionItemProps: Function
  ) =>
    suggestions.map(suggestion => {
      const className = suggestion.active
        ? `${classes.autocompleteItem} ${classes.autocompleteItemActive}`
        : classes.autocompleteItem;

      return (
        <ListItem
          {...getSuggestionItemProps(suggestion, {
            className,
            dense: true
          })}
        >
          <ListItemText
            primary={suggestion.formattedSuggestion.mainText}
            secondary={suggestion.formattedSuggestion.secondaryText}
          />
        </ListItem>
      );
    });

  return (
    <PlacesAutocomplete
      value={address}
      onChange={address =>
        dispatch({
          type: AppActionTypes.SET_ADDRESS,
          address
        })
      }
      onSelect={handleSelect}
      onError={handleError}
      shouldFetchSuggestions={address.length > 1}
      highlightFirstSuggestion
      debounce={100}
      searchOptions={{
        componentRestrictions: {
          country: "fi"
        }
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={classes.root}>
          <TextField
            {...getInputProps({
              id: "locationPicker",
              className: classes.textField,
              variant: "filled",
              margin: "dense",
              hiddenLabel: true,
              onFocus: handleFocus,
              placeholder: t("Search places")
            })}
            InputProps={{
              inputProps: {
                "aria-label": t("Location")
              },
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              )
            }}
          />
          {suggestions.length > 0 && (
            <div className={classes.autocompleteContainer}>
              {loading && loadingItem}
              {suggestionItems(suggestions, getSuggestionItemProps)}
              {footerItem}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationPicker;
