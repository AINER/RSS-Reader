import i18next from 'i18next';

export default () => {
  const languageEnglishSwitch = document.querySelector('.language-english');
  const languageRussianSwitch = document.querySelector('.language-russian');

  languageEnglishSwitch.addEventListener('click', () => {
    i18next.changeLanguage('en');

    languageEnglishSwitch.classList.add('active', 'disabled');
    languageEnglishSwitch.setAttribute('aria-current', 'true');
    languageRussianSwitch.classList.remove('active', 'disabled');
    languageRussianSwitch.removeAttribute('aria-current');
  });

  languageRussianSwitch.addEventListener('click', () => {
    i18next.changeLanguage('ru');

    languageEnglishSwitch.classList.remove('active', 'disabled');
    languageEnglishSwitch.removeAttribute('aria-current');
    languageRussianSwitch.classList.add('active', 'disabled');
    languageRussianSwitch.setAttribute('aria-current', 'true');
  });
};
