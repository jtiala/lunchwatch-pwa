import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation, Trans } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import lightGreen from "@material-ui/core/colors/lightGreen";

import theme from "../../defaultTheme";
import Logo from "../Logo/Logo";

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "auto",
    backgroundColor: lightGreen[50],
    padding: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    maxWidth: 600,
    marginTop: theme.spacing(3)
  },
  link: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none"
    }
  }
}));

const Footer: React.FC = () => {
  const classes = useStyles(theme);
  const { i18n } = useTranslation();
  const githubLink = (
    <Link
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/jtiala/lunchwatch-pwa"
    >
      GitHub
    </Link>
  );

  return (
    <footer className={classes.footer}>
      <Logo variant="dark" />
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        className={classes.text}
      >
        <Trans
          i18n={i18n}
          i18nKey="footer_info"
          components={[githubLink]}
        ></Trans>
      </Typography>
    </footer>
  );
};

export default Footer;
