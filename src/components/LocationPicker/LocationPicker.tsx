import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  Suggestion
} from "react-places-autocomplete";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOn from "@material-ui/icons/LocationOn";
import GpsFixed from "@material-ui/icons/GpsFixed";

import {
  useAppDispatch,
  useAppState,
  AppActionTypes
} from "../../state/appState";
import useStyles from "./LocationPicker.styles";

import {
  getFromLocalStorage,
  addToLocalStorage
} from "../../utils/localStorage";

const LocationPicker: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { address } = useAppState();
  const [originalAddress, setOriginalAddress] = useState(address);

  const handleSelect = (newAddress: string) => {
    setOriginalAddress(newAddress);

    geocodeByAddress(newAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        dispatch({
          type: AppActionTypes.SET_ADDRESS,
          address: newAddress,
          persist: true
        });
        dispatch({
          type: AppActionTypes.SET_LOCATION,
          location: latLng
        });
      })
      .catch(error => console.error("Location picker error", error));
  };

  const handleChange = (newAddress: string) => {
    dispatch({
      type: AppActionTypes.SET_ADDRESS,
      address: newAddress
    });
  };

  const handleFocus = () => {
    if (originalAddress === address) {
      dispatch({
        type: AppActionTypes.SET_ADDRESS,
        address: ""
      });
    }
  };

  const handleBlur = () => {
    if (!address.length) {
      dispatch({
        type: AppActionTypes.SET_ADDRESS,
        address: originalAddress
      });
    }
  };

  const handleGeoLocationClick = () => {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          const latLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          addToLocalStorage("gps_location", latLng);

          dispatch({
            type: AppActionTypes.SET_LOCATION,
            location: latLng
          });
        },
        error => {
          // Check cache if any errors occurred then set user's lat lng position
          const cachedLatLng = getFromLocalStorage("gps_location");

          if (cachedLatLng) {
            dispatch({
              type: AppActionTypes.SET_LOCATION,
              location: cachedLatLng
            });
          } else {
            console.error("Geolocation error", error);
          }
        }
      );
    }
  };

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
      onChange={handleChange}
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
              onBlur: handleBlur,
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
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <GpsFixed
                    className={classes.gpsFixedIcon}
                    onClick={handleGeoLocationClick}
                  />
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
