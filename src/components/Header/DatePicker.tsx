import React from "react";
import format from "date-fns/format";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Today from "@material-ui/icons/Today";

import { useAppDispatch, useAppState, AppActionTypes } from "../../appState";
import theme from "../../defaultTheme";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 0,
    display: "flex",
    flexBasis: 180,
    "& svg": {
      color: "rgba(255,255,255,0.75)"
    },
    "& > *": {
      color: "rgba(255,255,255,0.75)"
    }
  }
}));

const DatePicker: React.FC = () => {
  const classes = useStyles(theme);
  const dispatch = useAppDispatch();
  const { date } = useAppState();
  const { t } = useTranslation();

  return (
    <TextField
      id="datePicker"
      className={classes.textField}
      variant="filled"
      margin="dense"
      hiddenLabel
      InputProps={{
        inputProps: {
          "aria-label": t("Date")
        },
        startAdornment: (
          <InputAdornment position="start">
            <Today />
          </InputAdornment>
        )
      }}
      type="date"
      value={format(date, "yyyy-MM-dd")}
      onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
        typeof event.target.value === "string" &&
        event.target.value.length &&
        dispatch({
          type: AppActionTypes.SET_DATE,
          date: new Date(event.target.value)
        })
      }
    />
  );
};

export default DatePicker;
