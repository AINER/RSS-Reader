/* eslint-disable no-console  */

import * as yup from 'yup';
import onChange from 'on-change';
import renderForm from './form/renderer';
import insertExample from './form/example_renderer';

import load from './rss_feeds/data_loader';
import parse from './rss_feeds/xml_parser';
import renderChannelsAndPosts from './rss_feeds/renderer';
import { v4 as uuidv4 } from 'uuid';

// - Model
import state from './state';

export default () => {
  const elements = {
    form: document.querySelector('.rss-form'),
    submit: document.querySelector('.url-submit'),
    input: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback'),
  };

  // - View

  insertExample(elements);

  const trackedState = onChange(
    state,
    renderForm(elements),
    { isShallow: true, ignoreKeys: ['rssChannels'] },
  );
  const trackedStateForChannels = onChange(
    state,
    renderChannelsAndPosts(state),
    { ignoreKeys: ['errors', 'links'] },
  );

  // - Controller

  elements.input.addEventListener('input', () => {
    trackedState.errors = [];
  });

  elements.submit.addEventListener('click', (event) => {
    event.preventDefault();

    const schema = yup
      .string()
      .trim()
      .required('empty')
      .url('is not a link')
      .notOneOf(trackedState.links, 'duplicated');

    let currentUrl;

    schema
      .validate(elements.input.value.trim())
      .then((url) => {
        trackedState.links.push(url);
        currentUrl = url;
      })
      .then(() => load(currentUrl))
      .then((string) => parse(string))
      .then((xmlDocument) => {
        const items = Array.from(xmlDocument.querySelectorAll('item'));
        const posts = items.map((item) => (
          {
            title: item.childNodes[0].textContent,
            description: item.childNodes[1].textContent,
            publicationDate: item.childNodes[5].textContent,
            originalPostLink: item.childNodes[2].textContent,
            creator: item.childNodes[4].textContent,
            id: uuidv4(),
          }));

        trackedStateForChannels.rssChannels.push({
          url: currentUrl,
          title: xmlDocument.documentElement.childNodes[0].childNodes[0].textContent,
          description: xmlDocument.documentElement.childNodes[0].childNodes[1].textContent,
          posts,
        });
      })
      .catch((error) => {
        trackedState.errors = error.errors;
      });
  });
};
