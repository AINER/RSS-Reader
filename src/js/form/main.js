/* eslint-disable no-console  */

import * as yup from 'yup';
import onChange from 'on-change';
import render from './view';
import insertExample from './example';

export default () => {
  const elements = {
    form: document.querySelector('.rss-form'),
    submit: document.querySelector('.url-submit'),
    input: document.querySelector('#url-input'),
    errorMessage: document.querySelector('.invalid-feedback'),
  };

  // Uses MVC pattern

  // - Model

  const state = {
    rssLinkForm: {
      status: 'filling',
      links: [], // added feeds
      errors: [], // errors from yup validation scheme
    },
  };

  // - View

  insertExample();

  const trackedState = onChange(state, render(elements));

  // - Controller

  elements.input.addEventListener('input', () => {
    trackedState.rssLinkForm.status = 'filling';
    trackedState.rssLinkForm.errors = [];
  });

  // const schema = yup
  //   .string()
  //   .trim()
  //   .url()
  //   .notOneOf(initState.rssLinkForm.links);

  elements.submit.addEventListener('click', (event) => {
    event.preventDefault();

    // trackedState.rssLinkForm.status = 'sending';

    const schema = yup
      .string()
      .trim()
      .url('is-not-a-link')
      .notOneOf(trackedState.rssLinkForm.links, 'duplicated');

    schema
      .validate(elements.input.value)
      .then(() => {
        trackedState.rssLinkForm.links.push(elements.input.value.trim());
      })
      .catch((error) => {
        trackedState.rssLinkForm.errors = error.errors;
      });
  });
};
