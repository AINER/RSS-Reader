export default () => {
  const exampleLink = 'https://lorem-rss.hexlet.app/feed';

  const exampleLinkElement = document.querySelector('.example-link');
  exampleLinkElement.textContent = exampleLink;

  const exampleElement = document.querySelector('.example-container');
  const inputElement = document.querySelector('#url-input');

  exampleElement.addEventListener('click', () => {
    inputElement.value = exampleLink;
  });
};
