import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Language from "@material-ui/icons/Language";

import { useAppDispatch, useAppState, AppActionTypes } from "../../appState";
import theme from "../../defaultTheme";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 0,
    minWidth: 90,
    "& svg": {
      color: "rgba(255,255,255,0.75)"
    },
    "& > *": {
      color: "rgba(255,255,255,0.75)"
    }
  }
}));

const LanguagePicker: React.FC = () => {
  const classes = useStyles(theme);
  const dispatch = useAppDispatch();
  const { language } = useAppState();
  const { t, i18n } = useTranslation();

  return (
    <TextField
      id="languagePicker"
      className={classes.textField}
      variant="filled"
      margin="dense"
      hiddenLabel
      select
      InputProps={{
        inputProps: {
          "aria-label": t("Language")
        },
        startAdornment: (
          <InputAdornment position="start">
            <Language />
          </InputAdornment>
        )
      }}
      value={language}
      onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
        if (typeof event.target.value === "string") {
          i18n.changeLanguage(event.target.value);

          dispatch({
            type: AppActionTypes.SET_LANGUAGE,
            language: event.target.value
          });
        }
      }}
    >
      <MenuItem value="fi">{t("FI")}</MenuItem>
      <MenuItem value="en">{t("EN")}</MenuItem>
    </TextField>
  );
};

export default LanguagePicker;
