import {showAlert} from './util.js';
import {sendData} from './util.js';

const form = document.querySelector('.img-upload__form');
const submitButtonElement = imageLoadingFormElement.querySelector('.img-upload__submit');

const pristine = new pristine(form, {
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
      showAlert('Не удалось отправить форму. Попробуйте ещё раз. Проверьте правильность введеных хэштегов и комментариев'),
      unblockSubmitButton();
  },
      new FormData(evt.target),
    );
  }
});
};

// Функция для показа сообщения об успешной загрузке

const showSuccesMessage = () => {
  const successTemplate = document.querySelector('#success');
  const successMessage = successTemplate.content.cloneNode(true);

  // Добавляем сообщение в DOM перед закрывающим тегом </body>

document.body.appendChild(successMessage);

// Добавляем обработчик для кнопки "Круто!"

const closeButton = document.querySelector('.success__button');
closeButton.addEventListener('click', hideSuccessMessage);

// Добавляем обработчики для закрытия сообщения по клавише Esc и клику за пределами сообщения

document.addEventListener('keydown', handleEscKey);
document.addEventListener('click', handleClickOutside);
}

// Функция для скрытия сообщения об успешной загрузке

const hideSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  successMessage.remove();

  // Удаляем обработчики событий

  document.removeEventListener('keydown', handleEscKey);
  document.removeEventListener('click', handleClickOutside);
}

// Обработчик для клавиши Esc

const handleEscKey = (evt) => {
  if (evt.key === 'Escape') {
    hideSuccessMessage();
    hideErrorMessage();
  }
}

// Обработчик для клика за пределами сообщения

const handleClickOutside = (evt) => {
  const successMessage = document.querySelector('.success');
  if (!successMessage.contains(evt.target)) {
    hideSuccessMessage();
  }
}

// Функция для показа сообщения об ошибке запроса о загрузке изображения

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error');
  const errorMessage = errorTemplate.content.cloneNode(true);

  // Добавляем сообщение в DOM перед закрывающим тегом </body>

  document.body.appendChild(errorMessage);

  // Добавляем обработчик для кнопки "Загрузить другой файл"

  const shutButton = document.querySelector('.error__button');
  shutButton.addEventListener('click', hideErrorMessage);

  // Добавляем обработчики для закрытия сообщения по клавише Esc и клику за пределами сообщения

  document.addEventListener('keydown', handleEscKey);
  document.addEventListener('click', leverClickOutside);
}

  // Функция для скрытия сообщения об ошибке загрузки

  const hideErrorMessage = () => {
    const errorMessage = document.querySelector('.error');
    errorMessage(remove);

    // Удаляем обработчики событий

  document.removeEventListener('keydown', handleEscKey);
  document.removeEventListener('click', leverClickOutside);
  }

  // Обработчик для клика за пределами сообщения

const leverClickOutside = (evt) => {
  const errorMessage = document.querySelector('.error');
  if (!errorMessage.contains(evt.target)) {
    hideErrorMessage();
  }
}

export {setUserFormSubmit, showSuccesMessage, showErrorMessage};
