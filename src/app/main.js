/* eslint-disable no-console  */

import * as yup from 'yup';
import onChange from 'on-change';

import renderForm from './form/renderer';
import renderExample from './form/example_renderer';

import loadData from './rss/data_loader';
import parseXml from './rss/xml_parser';
import renderPosts from './rss/posts_renderer';
import renderFeeds from './rss/feeds_renderer';

// --- Model ---
import state from './state';

export default () => {
  const elements = {
    form: document.querySelector('.rss-form'),
    submit: document.querySelector('.url-submit'),
    input: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback'),
  };

  // --- View ---

  renderExample(elements);

  const trackedState = onChange(
    state,
    (path, value, previousValue) => {
      switch (path) {
        case 'errors':
          renderForm(elements, value);
          break;
        case 'feeds':
          renderForm(elements, value);
          renderFeeds(state, value);
          break;
        case 'posts': {
          // Filters new posts with previous state value of posts for partial rendering
          const addedPostsLinks = previousValue.map(({ originalPostLink }) => originalPostLink);
          const newPostsForRendering = value
            .filter((post) => !addedPostsLinks.includes(post.originalPostLink));
          renderPosts(state, newPostsForRendering);
          break;
        }
        default:
          break;
      }
    },
  );

  // --- Controller ---

  // Clears errors, when user enter new link
  elements.input.addEventListener('input', () => {
    trackedState.errors = [];
  });

  // Validates and loads feeds, when link have been submit
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
        currentUrl = url;
        state.links.push(currentUrl);
      })
      .then(() => loadData(currentUrl))
      .then((xmlString) => parseXml(xmlString, currentUrl))
      .then((channel) => {
        const {
          title,
          description,
          url,
          posts,
        } = channel;

        const feed = {
          title,
          description,
          url,
        };

        trackedState.posts.push(...posts);
        trackedState.feeds.push(feed);
      })
      .catch((error) => {
        trackedState.errors = error.errors;
        if (error.errors === undefined) { // deleting broken link from entered link array
          state.links.pop(currentUrl);
        }
      });
  });

  // Updates posts from added feeds at the specified interval
  const feedsUpdateInterval = 5000;

  const startUpdatingPosts = () => {
    const addedPostsLinks = trackedState.posts.map(({ originalPostLink }) => originalPostLink);
    trackedState.feeds.forEach(({ url }) => {
      loadData(url)
        .then((xmlString) => parseXml(xmlString, url))
        .then(({ posts }) => {
          const newPosts = posts
            .filter((post) => !addedPostsLinks.includes(post.originalPostLink));
          trackedState.posts.push(...newPosts);
        });
    });

    setTimeout(startUpdatingPosts, feedsUpdateInterval);
  };

  startUpdatingPosts();
};
