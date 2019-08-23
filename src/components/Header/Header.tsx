import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";

import useStyles from "./Header.styles";
import Logo from "../Logo/Logo";
import LocationPicker from "../LocationPicker/LocationPicker";
import DatePicker from "../DatePicker/DatePicker";
import LanguagePicker from "../LanguagePicker/LanguagePicker";

const Header: React.FC = () => {
  const classes = useStyles();

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
