import React from "react";

export interface Location {
  lat: number;
  lng: number;
}

export interface AppState {
  language: string;
  date: Date;
  address: string;
  location: Location | undefined;
}

export const initialState: AppState = {
  language: "fi",
  date: new Date(),
  address: "University of Oulu",
  location: {
    lat: 65.0593177,
    lng: 25.466293500000006
  }
};

export enum AppActionTypes {
  RESET = "reset",
  SET_LANGUAGE = "setLanguage",
  SET_DATE = "setDate",
  SET_LOCATION = "setLocation",
  SET_ADDRESS = "setAddress"
}

export type AppAction =
  | { type: AppActionTypes.RESET }
  | { type: AppActionTypes.SET_LANGUAGE; language: string }
  | { type: AppActionTypes.SET_DATE; date: Date }
  | { type: AppActionTypes.SET_LOCATION; location: Location }
  | { type: AppActionTypes.SET_ADDRESS; address: string };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.RESET:
      return initialState;
    case AppActionTypes.SET_LANGUAGE:
      return typeof action.language === "string"
        ? {
            ...state,
            language: action.language
          }
        : state;
    case AppActionTypes.SET_DATE:
      return action.date instanceof Date
        ? {
            ...state,
            date: action.date
          }
        : state;
    case AppActionTypes.SET_LOCATION:
      return typeof action.location === "object"
        ? {
            ...state,
            location: action.location
          }
        : state;
    case AppActionTypes.SET_ADDRESS:
      return typeof action.address === "string"
        ? {
            ...state,
            address: action.address
          }
        : state;
    default:
      return state;
  }
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
