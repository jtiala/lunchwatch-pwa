import React from "react";

import {
  getFromLocalStorage,
  addToLocalStorage,
  clearLocalStorage
} from "./localStorage";

export interface Location {
  lat: number;
  lng: number;
}

export interface AppState {
  language: string;
  date: Date;
  address: string;
  location: Location | undefined;
  favorites: number[];
}

export const initialState: AppState = {
  language: String(getFromLocalStorage("language", "fi")),
  date: new Date(),
  address: String(getFromLocalStorage("address", "University of Oulu")),
  location: {
    lat: parseFloat(String(getFromLocalStorage("lat", 65.0593177))),
    lng: parseFloat(String(getFromLocalStorage("lng", 25.466293500000006)))
  },
  favorites: getFromLocalStorage("favorites", [])
};

export enum AppActionTypes {
  RESET = "reset",
  SET_LANGUAGE = "setLanguage",
  SET_DATE = "setDate",
  SET_LOCATION = "setLocation",
  SET_ADDRESS = "setAddress",
  ADD_FAVORITE = "addFavorite",
  REMOVE_FAVORITE = "removeFavorite"
}

export type AppAction =
  | { type: AppActionTypes.RESET }
  | { type: AppActionTypes.SET_LANGUAGE; language: string }
  | { type: AppActionTypes.SET_DATE; date: Date }
  | { type: AppActionTypes.SET_LOCATION; location: Location }
  | { type: AppActionTypes.SET_ADDRESS; address: string; persist?: boolean }
  | { type: AppActionTypes.ADD_FAVORITE; id: number | undefined }
  | { type: AppActionTypes.REMOVE_FAVORITE; id: number | undefined };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.RESET:
      clearLocalStorage();

      return initialState;
    case AppActionTypes.SET_LANGUAGE:
      if (typeof action.language === "string") {
        addToLocalStorage("language", action.language);

        return {
          ...state,
          language: action.language
        };
      }

      return state;
    case AppActionTypes.SET_DATE:
      return action.date instanceof Date
        ? {
            ...state,
            date: action.date
          }
        : state;
    case AppActionTypes.SET_LOCATION:
      if (typeof action.location === "object") {
        addToLocalStorage("lat", action.location.lat);
        addToLocalStorage("lng", action.location.lng);

        return {
          ...state,
          location: action.location
        };
      }

      return state;
    case AppActionTypes.SET_ADDRESS:
      if (typeof action.address === "string") {
        if (action.persist) {
          addToLocalStorage("address", action.address);
        }

        return {
          ...state,
          address: action.address
        };
      }

      return state;
    case AppActionTypes.ADD_FAVORITE:
      if (typeof action.id === "number") {
        const previousFavorites = getFromLocalStorage("favorites", []);

        if (!previousFavorites.includes(action.id)) {
          const newFavorites = [...previousFavorites, action.id];

          addToLocalStorage("favorites", newFavorites);

          return {
            ...state,
            favorites: [...previousFavorites, action.id]
          };
        }
      }

      return state;
    case AppActionTypes.REMOVE_FAVORITE:
      if (typeof action.id === "number") {
        const previousFavorites = getFromLocalStorage("favorites", []);

        if (previousFavorites.includes(action.id)) {
          const newFavorites = previousFavorites.filter(
            (fav: number) => fav !== action.id
          );

          addToLocalStorage("favorites", newFavorites);

          return {
            ...state,
            favorites: newFavorites
          };
        }
      }

      return state;
  }

  return state;
};

const AppStateContext = React.createContext(initialState);

const AppDispatchContext = React.createContext((() =>
  undefined) as React.Dispatch<AppAction>);

export const AppStateProvider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = React.useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }

  return context;
};

export const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppStateProvider");
  }

  return context;
};
