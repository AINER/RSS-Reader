import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import ru from './locales/ru';

import renderLocalization from './renderer';
import activateLanguageSwitcher from './language_switcher';

export default async () => {
  // await i18next.use(LanguageDetector).init({
  await i18next.init({
    // supportedLngs: ['en', 'ru'],
    fallbackLng: 'ru',
    debug: true,
    resources: {
      en,
      ru,
    },
  });

  renderLocalization();
  activateLanguageSwitcher();

  i18next.on('languageChanged', () => {
    renderLocalization();
  });
};
