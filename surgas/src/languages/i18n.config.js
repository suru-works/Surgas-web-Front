import { createIntl } from "react-intl";
import { SPANISH, ENGLISH } from "./languages";
import esTranslations from './strings.es.json';
import enTranslations from './strings.en.json';

const i18n = createIntl({
  locale: SPANISH,
  defaultLocale: SPANISH,
  supportedLanguages: [SPANISH, ENGLISH],
  resources: {
    es: esTranslations,
    en: enTranslations,
  },
});

export default i18n;