/* eslint-disable no-param-reassign */

import _ from 'lodash';

export default (elements) => (path, value) => {
  if (value.includes('duplicated') || value.includes('is-not-a-link')) {
    elements.input.classList.add('is-invalid');
    elements.submit.classList.add('disabled');

    if (value.includes('duplicated')) {
      elements.errorMessage.textContent = 'Эта ссылка уже добавлена';
      return;
    }

    if (value.includes('is-not-a-link')) {
      elements.errorMessage.textContent = 'Некорректная ссылка';
      return;
    }
  }

  if (_.isEmpty(value)) {
    elements.submit.classList.remove('disabled');
    elements.input.classList.remove('is-invalid');
    elements.errorMessage.textContent = '';

    return;
  }

  elements.form.reset();
  elements.input.focus();
};
