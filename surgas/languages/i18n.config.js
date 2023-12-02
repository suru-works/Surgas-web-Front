import i18next from 'i18next';

const i18n = i18next.createInstance({
  defaultLanguage: 'es',

  supportedLanguages: ['en', 'es'],

  resources: {
    es: require("./display.es.json"),
    en: require("./display.en.json"),
  },
});

export default i18n;