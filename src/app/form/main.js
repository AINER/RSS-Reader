/* eslint-disable no-console  */

import * as yup from 'yup';
import onChange from 'on-change';
import render from './input_render';
import insertExample from './example_render';

export default () => {
  const elements = {
    form: document.querySelector('.rss-form'),
    submit: document.querySelector('.url-submit'),
    input: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback'),
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

  insertExample(elements);

  const trackedState = onChange(state, render(elements));

  // - Controller

  elements.input.addEventListener('input', () => {
    trackedState.rssLinkForm.status = 'filling';
    trackedState.rssLinkForm.errors = [];
  });

  // BUG: scheme in listener doesn't see this const
  // const schema = yup
  //   .string()
  //   .trim()
  //   .required('empty')
  //   .url('is not a link')
  //   .notOneOf(trackedState.rssLinkForm.links, 'duplicated');

  elements.submit.addEventListener('click', (event) => {
    event.preventDefault();

    const schema = yup
      .string()
      .trim()
      .required('empty')
      .url('is not a link')
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
