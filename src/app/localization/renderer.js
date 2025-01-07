/* eslint-disable no-param-reassign  */

import i18next from 'i18next';

export default () => {
  const heroTitle = document.querySelector('.hero-title');
  heroTitle.textContent = i18next.t('heroSection.title');
  const heroDescription = document.querySelector('.hero-description');
  heroDescription.textContent = i18next.t('heroSection.description');

  // --- Form section ---
  const urlInputLabel = document.querySelector('.url-input-label');
  urlInputLabel.textContent = i18next.t('rssUrlForm.label');
  const addButton = document.querySelector('.add');
  addButton.textContent = i18next.t('rssUrlForm.button');
  const inputExample = document.querySelector('.example-title');
  inputExample.textContent = i18next.t('rssUrlForm.example');

  // --- Channels and Posts section ---
  const postsTitle = document.querySelector('.posts-title');
  postsTitle.textContent = i18next.t('channelsAndPosts.postsTitle');
  const channelsTitle = document.querySelector('.channels-title');
  channelsTitle.textContent = i18next.t('channelsAndPosts.channelsTitle');

  // Rendering of buttons in template (doesn't exist in DOM)
  // ofter initialization of localization and switching of localization
  const postCardTemplate = document.querySelector('#post-card');
  const originalPostButtonInTemplate = postCardTemplate.content.querySelector('.original-post-button');
  originalPostButtonInTemplate.textContent = i18next.t('channelsAndPosts.originalPostButton');
  // const markAsReadButtonInTemplate = postCardTemplate.content
  //   .querySelector('.mark-as-read-button');
  // markAsReadButtonInTemplate.textContent = i18next.t('channelsAndPosts.markAsReadButton');

  // Rendering of buttons in DOM (after sending from template)
  // after switching of localization
  const originalPostButton = document.querySelectorAll('.original-post-button');

  // Checking whether one of buttons of the card from template exists
  if (originalPostButton.length !== 0) {
    originalPostButton.forEach((element) => {
      element.textContent = i18next.t('channelsAndPosts.originalPostButton');
    });
    // const markAsReadButton = document.querySelectorAll('.mark-as-read-button');
    // markAsReadButton.forEach((element) => {
    //   element.textContent = i18next.t('channelsAndPosts.markAsReadButton');
    // });
  }

  const modalCloseButton = document.querySelector('.modal__close-button');
  modalCloseButton.textContent = i18next.t('channelsAndPosts.modalCloseButton');

  // --- Footer section ---
  const languageDropdownButton = document.querySelector('.language-current');
  languageDropdownButton.textContent = i18next.t('currentLanguage');

  const enLanguageSwitcher = document.querySelector('.language-en');
  const ruLanguageSwitcher = document.querySelector('.language-ru');
  switch (i18next.language) {
    case 'en':
      enLanguageSwitcher.classList.add('active', 'disabled');
      break;
    case 'ru':
      ruLanguageSwitcher.classList.add('active', 'disabled');
      break;
    default:
      throw new Error('Undefined language');
  }

  const madeBY = document.querySelector('.made-by');
  madeBY.textContent = i18next.t('footer.madeBy');
};
