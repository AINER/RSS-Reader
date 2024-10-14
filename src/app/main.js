/* eslint-disable no-console  */

import * as yup from 'yup';
import onChange from 'on-change';

import renderForm from './form/renderer';
import insertExample from './form/example_renderer';

import load from './rss_feeds/data_loader';
import parse from './rss_feeds/xml_parser';
import renderChannelsAndPosts from './rss_feeds/renderer';

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
      .then((xmlString) => parse(xmlString, currentUrl))
      .then((channel) => {
        trackedStateForChannels.rssChannels.push(channel);
      })
      .catch((error) => {
        trackedState.errors = error.errors;
      });
  });
};
