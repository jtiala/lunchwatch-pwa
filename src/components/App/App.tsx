import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { AppStateProvider } from "../../appState";
import apolloClient from "../../apolloClient";
import theme from "../../defaultTheme";
import Header from "../Header/Header";
import MenuWall from "../MenuWall/MenuWall";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(theme => ({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }
}));

const App: React.FC = () => {
  const classes = useStyles(theme);

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
