import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import useStyles from "./Logo.styles";
import { Props } from "./Logo.interfaces";

const Logo: React.FC<Props> = ({ variant }) => {
  const classes = useStyles({ variant });

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
