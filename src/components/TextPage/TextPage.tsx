import React from "react";
import Paper from "@material-ui/core/Paper";

import useStyles from "./TextPage.styles";
import { Props } from "./TextPage.interfaces";

const TextPage: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return <Paper className={classes.root}>{children}</Paper>;
};

export default TextPage;
