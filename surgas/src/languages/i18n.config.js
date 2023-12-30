import { createIntl } from "react-intl";
import languages from "./languages";
import esTranslations from './strings.es.json';
import enTranslations from './strings.en.json';

const i18n = createIntl({
  locale: languages.spanish,
  defaultLocale: languages.spanish,
  supportedLanguages: [languages.spanish, languages.english],
  resources: {
    es: esTranslations,
    en: enTranslations,
  },
});

export default i18n;