import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import theme from "../../defaultTheme";
import Logo from "./Logo";
import LocationPicker from "./LocationPicker";
import DatePicker from "./DatePicker";
import LanguagePicker from "./LanguagePicker";

const useStyles = makeStyles(theme => ({
  appBar: {
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  grower: {
    flexGrow: 1
  }
}));

const Header: React.FC = () => {
  const classes = useStyles(theme);

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Grid container direction="row" spacing={1} justify="flex-end">
        <Grid item xs={12} md={"auto"} className={classes.grower}>
          <Grid container direction="row" spacing={1} justify="space-between">
            <Grid item className={classes.grower}>
              <Logo />
            </Grid>
            <Grid item>
              <LanguagePicker />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={"auto"}>
          <Grid container direction="row" spacing={1} justify="space-between">
            <Grid item xs={12} sm={6} md={"auto"}>
              <DatePicker />
            </Grid>
            <Grid item xs={12} sm={6} md={"auto"}>
              <LocationPicker />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
