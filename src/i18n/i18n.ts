import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./translations/en.json";
import { fi } from "./translations/fi.json";

i18n.use(initReactI18next).init({
  lng: "fi",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en,
    fi
  }
});

export default i18n;
