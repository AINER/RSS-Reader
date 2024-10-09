import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import ru from './locales/ru';

import renderLocalization from './renderer';

export default async () => {
  await i18next.use(LanguageDetector).init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
      en,
      ru,
    },
  });

  renderLocalization();

  i18next.on('languageChanged', () => {
    renderLocalization();
  });
};
