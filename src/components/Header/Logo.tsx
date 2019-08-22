import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import theme from "../../defaultTheme";

const useStyles = makeStyles(theme => ({
  logo: {
    display: "inline-block",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
    "& sup": {
      fontSize: "0.6rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.75)"
    }
  },
  link: {
    color: theme.palette.common.white,
    "&:hover": {
      color: "rgba(255,255,255,0.9)",
      textDecoration: "none"
    }
  }
}));

const Logo: React.FC = () => {
  const classes = useStyles(theme);

  return (
    <Typography variant="h1" className={classes.logo} noWrap>
      <Link className={classes.link} href="/">
        Lunch<strong>Watch</strong>
      </Link>
      <sup>Beta</sup>
    </Typography>
  );
};

export default Logo;
