import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Props } from "./Logo.interfaces";

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  logo: props => ({
    display: "inline-block",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
    "& sup": {
      fontSize: "0.6rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color:
        props.variant === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.75)"
    }
  }),
  link: props => ({
    color:
      props.variant === "dark" ? "rgba(0,0,0,0.9)" : theme.palette.common.white,
    "&:hover": {
      color:
        props.variant === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)",
      textDecoration: "none"
    }
  })
}));

export default useStyles;
