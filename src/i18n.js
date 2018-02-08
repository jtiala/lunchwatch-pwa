import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { en } from './translations/en.json';
import { fi } from './translations/fi.json';

i18n
  .use(reactI18nextModule)
  .init({
    lng: 'fi',
    fallbackLng: 'en',
    ns: [
      'common',
      'languages',
      'menu',
    ],
    defaultNS: 'common',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
    resources: {
      en,
      fi,
    },
  });

export default i18n;
