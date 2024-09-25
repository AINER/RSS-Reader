/* eslint-disable no-param-reassign */

import _ from 'lodash';

export default (elements) => (path, value) => {
  if (!_.isEmpty(value)) {
    elements.submit.classList.add('disabled');
    elements.input.classList.add('is-invalid');

    if (value.includes('duplicated')) {
      elements.errorMessage.textContent = 'Эта ссылка уже добавлена';
    } else if (value.includes('is-not-a-link')) {
      elements.errorMessage.textContent = 'Некорректная ссылка';
    }

    return;
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
