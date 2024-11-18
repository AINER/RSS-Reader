/* eslint-disable no-param-reassign */

import i18next from 'i18next';
import isEmpty from 'lodash/isEmpty';

export default (elements, value) => {
  const render = () => {
    if (
      value === undefined
      || value.includes('is not a link')
      || value.includes('empty')
      || value.includes('duplicated')
    ) {
      elements.input.classList.add('is-invalid');
      elements.submit.classList.add('disabled');
      elements.feedback.classList.add('invalid-feedback');

      if (value === undefined) {
        elements.feedback.textContent = i18next.t('rssUrlForm.statusFeedback.errors.unsuccessfulRSSParsing');
        return;
      }

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

    if (isEmpty(value)) {
      elements.submit.classList.remove('disabled');
      elements.input.classList.remove('is-invalid', 'is-valid');
      elements.feedback.classList.remove('invalid-feedback', 'valid-feedback');
      elements.feedback.textContent = '';

      return;
    }

    elements.form.reset();
    elements.input.focus();
    elements.input.classList.add('is-valid');
    elements.feedback.classList.add('valid-feedback');
    elements.feedback.textContent = i18next.t('rssUrlForm.statusFeedback.success');
  };

  render();
  i18next.on('languageChanged', render);
};
