/* eslint-disable no-param-reassign */

export default (elements) => {
  const exampleLink = 'https://lorem-rss.hexlet.app/feed';

  const exampleLinkElement = document.querySelector('.example-link');
  exampleLinkElement.textContent = exampleLink;

  const exampleElement = document.querySelector('.example-container');
  const inputElement = document.querySelector('#url-input');

  exampleElement.addEventListener('click', () => {
    inputElement.value = exampleLink;
    elements.submit.classList.remove('disabled');
    elements.input.classList.remove('is-invalid', 'is-valid');
    elements.feedback.classList.remove('invalid-feedback', 'valid-feedback');
    elements.feedback.textContent = '';
  });
};
