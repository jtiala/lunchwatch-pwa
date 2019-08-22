import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { AppStateProvider } from "../../appState";
import apolloClient from "../../apolloClient";
import theme from "../../defaultTheme";
import Header from "../Header/Header";
import MenuWall from "../MenuWall/MenuWall";

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppStateProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <MenuWall />
        </ThemeProvider>
      </AppStateProvider>
    </ApolloProvider>
  );
};

export default App;
