import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import ru from './locales/ru';

export default async () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroDescription = document.querySelector('.hero-description');

  const urlInputLabel = document.querySelector('.url-input-label');
  const addButton = document.querySelector('.add');
  const inputExample = document.querySelector('.example-title');

  const languageDropdownButton = document.querySelector('.language-current');
  const madeBY = document.querySelector('.made-by');

  const renderLocalization = () => {
    heroTitle.textContent = i18next.t('heroSection.title');
    heroDescription.textContent = i18next.t('heroSection.description');

    urlInputLabel.textContent = i18next.t('rssUrlForm.label');
    addButton.textContent = i18next.t('rssUrlForm.button');
    inputExample.textContent = i18next.t('rssUrlForm.example');

    languageDropdownButton.textContent = i18next.t('currentLanguage');
    madeBY.textContent = i18next.t('footer.madeBy');
  };

  i18next.on('initialized', () => {
    renderLocalization();
  });

  i18next.on('languageChanged', () => {
    renderLocalization();
  });

  await i18next.use(LanguageDetector).init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en,
      ru,
    },
  });
};
