import {getRandomArrayElement, showAlert} from './util.js';
import {sendData} from './util.js';

const form = document.querySelector('.img-upload__form');
const submitButtonElement = imageLoadingFormElement.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__label',
  errorTextParent: 'img-upload__label',
  errorTextClass: 'img-upload__label__error-text',
});


const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

// Опрокинуть колбэк, который будет вызван при успешной отправке формы

const setUserFormSubmit = (onSuccess) => {
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
      onSuccess(),
      unblockSubmitButton();
    },
      () => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      unblockSubmitButton();
  },
      new FormData(evt.target),
    );
  }
});
};

export {setUserFormSubmit};
