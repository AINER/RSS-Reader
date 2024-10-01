/* eslint-disable no-param-reassign */

import i18next from 'i18next';
import _ from 'lodash';

export default (elements) => (path, value) => {
  const render = () => {
    console.log('value', value);

    if (value.includes('duplicated') || value.includes('is not a link') || value.includes('empty')) {
      elements.input.classList.add('is-invalid');
      elements.submit.classList.add('disabled');
      elements.feedback.classList.add('invalid-feedback');

      if (value.includes('empty')) {
        elements.feedback.textContent = i18next.t('rssUrlForm.statusFeedback.errors.emptyInput');
        return;
      }

      if (value.includes('is not a link')) {
        elements.feedback.textContent = i18next.t('rssUrlForm.statusFeedback.errors.incorrectLink');
        return;
      }

      if (value.includes('duplicated')) {
        elements.feedback.textContent = i18next.t('rssUrlForm.statusFeedback.errors.duplicatedLink');
        return;
      }
    }

    if (_.isEmpty(value)) {
      elements.submit.classList.remove('disabled');
      elements.input.classList.remove('is-invalid', 'is-valid');
      elements.feedback.classList.remove('invalid-feedback', 'valid-feedback');
      elements.feedback.textContent = '';

      return;
    }

    console.log('😅');
    elements.form.reset();
    elements.input.focus();
    elements.input.classList.add('is-valid');
    elements.feedback.classList.add('valid-feedback');
    elements.feedback.textContent = i18next.t('rssUrlForm.statusFeedback.success');
  };

  render();
  i18next.on('languageChanged', render);
};
