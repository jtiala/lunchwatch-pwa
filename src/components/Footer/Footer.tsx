import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import useStyles from "./Footer.styles";
import Logo from "../Logo/Logo";

const Footer: React.FC = () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();

  const privacyLink = (
    <Link className={classes.link} component={RouterLink} to="/privacy">
      Privacy
    </Link>
  );

  const githubLink = (
    <Link
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/jtiala/lunchwatch-pwa"
    >
      {t("GitHub")}
    </Link>
  );

  return (
    <footer className={classes.footer}>
      <Logo variant="dark" />
      <Typography variant="body2" color="textSecondary" align="center">
        {privacyLink} | {githubLink}
      </Typography>
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
