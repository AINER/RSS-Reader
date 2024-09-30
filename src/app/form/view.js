/* eslint-disable no-param-reassign */

import i18next from 'i18next';
import _ from 'lodash';

export default (elements) => (path, value) => {
  const render = () => {
    console.log('value', value);

    if (value.includes('duplicated') || value.includes('is not a link') || value.includes('empty')) {
      elements.input.classList.add('is-invalid');
      elements.submit.classList.add('disabled');

      if (value.includes('empty')) {
        elements.errorMessage.textContent = i18next.t('rssUrlForm.errors.emptyInput');
        return;
      }

      if (value.includes('is not a link')) {
        elements.errorMessage.textContent = i18next.t('rssUrlForm.errors.incorrectLink');
        return;
      }

      if (value.includes('duplicated')) {
        elements.errorMessage.textContent = i18next.t('rssUrlForm.errors.duplicatedLink');
        return;
      }
    }

    if (_.isEmpty(value)) {
      elements.submit.classList.remove('disabled');
      elements.input.classList.remove('is-invalid');
      elements.errorMessage.textContent = '';

      return;
    }

    console.log('😅');
    elements.form.reset();
    elements.input.focus();
  };

  render();
  i18next.on('languageChanged', render);
};
