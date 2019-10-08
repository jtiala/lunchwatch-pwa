import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

import TextPage from "../TextPage/TextPage";

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <TextPage>
      <Typography variant={"h2"}>{t("Privacy")}</Typography>
      <Typography>{t("privacy_body")}</Typography>
    </TextPage>
  );
};

export default Privacy;
