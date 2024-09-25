/* eslint-disable no-param-reassign */

import _ from 'lodash';

export default (elements) => (path, value) => {
  console.log(value);
  if (value.includes('duplicated')) {
    elements.input.classList.add('is-invalid');
    elements.errorMessage.textContent = 'Эта ссылка уже добавлена';
    elements.submit.classList.add('disabled');

    return;
  }

  if (value.includes('is-not-a-link')) {
    elements.input.classList.add('is-invalid');
    elements.errorMessage.textContent = 'Некорректная ссылка';
    elements.submit.classList.add('disabled');

    return;
  }

  if (_.isEmpty(value)) {
    elements.input.classList.remove('is-invalid');
    elements.errorMessage.textContent = '';
    elements.submit.classList.remove('disabled');

    return;
  }

  elements.form.reset();
  elements.input.focus();
};
