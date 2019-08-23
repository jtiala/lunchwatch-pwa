import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import apolloClient from "../../apolloClient";
import { AppStateProvider } from "../../appState";
import theme from "../../defaultTheme";
import useStyles from "./App.styles";
import Header from "../Header/Header";
import MenuWall from "../MenuWall/MenuWall";
import Footer from "../Footer/Footer";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={apolloClient}>
      <AppStateProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className={classes.app}>
            <Header />
            <MenuWall />
            <Footer />
          </div>
        </ThemeProvider>
      </AppStateProvider>
    </ApolloProvider>
  );
};

export default App;
