import i18next from 'i18next';

export default () => {
  const enLanguageSwitcher = document.querySelector('.language-en');
  const ruLanguageSwitcher = document.querySelector('.language-ru');

  enLanguageSwitcher.addEventListener('click', () => {
    i18next.changeLanguage('en');

    enLanguageSwitcher.classList.add('active', 'disabled');
    enLanguageSwitcher.setAttribute('aria-current', 'true');
    ruLanguageSwitcher.classList.remove('active', 'disabled');
    ruLanguageSwitcher.removeAttribute('aria-current');
  });

  ruLanguageSwitcher.addEventListener('click', () => {
    i18next.changeLanguage('ru');

    enLanguageSwitcher.classList.remove('active', 'disabled');
    enLanguageSwitcher.removeAttribute('aria-current');
    ruLanguageSwitcher.classList.add('active', 'disabled');
    ruLanguageSwitcher.setAttribute('aria-current', 'true');
  });
};
