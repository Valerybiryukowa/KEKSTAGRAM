const HASTAG_AMOUNT = 5;
const COMMENTS_LENGTH = 140;

const imageLoadingFormElement = document.querySelector('.img-upload__form');
const imageLoadingTextContainer = document.querySelector('.img-upload__text');
const hashtagInputElement = imageLoadingFormElement.querySelector('.text__hashtags');
const commentsInputElement = imageLoadingFormElement.querySelector('.text__description');
const successMessageTemplateElement = document.querySelector('#success').content.querySelector('.success');
const successButtonElement = successMessageTemplateElement.querySelector('.success__button');
const errorMessageTemplateElement = document.querySelector('#error').content.querySelector('.error');
const errorButtonElement = errorMessageTemplateElement.querySelector('.error__button');
const submitButtonElement = imageLoadingFormElement.querySelector('.img-upload__submit');

// Функция для снятия обработчика для события keydown, при срабатывании события focus, с помощью stopPropagation когда фокус в поле хэштега, чтобы клавишей эск нельзя было закрыть форму

const hashtagInput = document.getElementById('hashtag-input');

const handleEsc = (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
};

const addEscHandler = () => {
  document.addEventListener('keydown', handleEsc);
};

const removeEscHandler = () => {
  document.removeEventListener('keydown', handleEsc);
};

hashtagInput.addEventListener('focus', addEscHandler);
hashtagInput.addEventListener('blur', removeEscHandler);


const submitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикация...'
};


const pristine = new Pristine(imageLoadingFormElement, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const hashtagRegularExp = /^#[a-zа-яё0-9]{1,19}$/i;
const commentsRegularExp = /^#[a-zа-яё0-9]{1,19}$/i;

const hideSuccessMessage = () => successMessageTemplateElement.remove();
const hideErrorMessage = () => errorMessageTemplateElement.remove();

successButtonElement.addEventListener('click', hideSuccessMessage);
errorButtonElement.addEventListener('click', hideErrorMessage);

// Для скрытия сообщения, пользователь мог щелкнуть в любом месте на странице, чтобы скрыть сообщения об успехе или ошибке взаимодействия с формой
window.addEventListener('click', hideSuccessMessage);
window.addEventListener('click', hideErrorMessage);

//Сброс состояния загрузки изображения, очистка поля и элементов формы, показ и скрытие сообщения об успешной загрузки



const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = submitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = submitButtonText.IDLE;
};

// Выполняет проверку правильности хэштегов

const validateHashtag = (value) => {
  const hashtagsArray = value.toLowerCase().trim().split(' ');

  if (value === '') {
    return true;
  }

  return hashtagsArray.every((hashtag) => hashtagRegularExp.test(hashtag));
};

// Проверка что все хэштеги в переданной строке уникальны (не повторяются)

const validateHashtagUnique = (value) => {
  const hashtagsArray = value.toLowerCase().trim().split(' ');
  const uniqueHashtagsArray = new Set(hashtagsArray);

  return hashtagsArray.length === uniqueHashtagsArray.size;
};

// Проверка количества хэштегов, условие что их не больше пяти

const validateHashtagAmount = (value) => {
  const hashtagsArray = value.toLowerCase().trim().split(' ');

  return hashtagsArray.length <= HASTAG_AMOUNT;
};

// Проверка что длина комментария не больше 140 символов

const validateComments = (value) => {
  const commentsArray = value.toLowerCase().trim().split(' ');

  return commentsArray.length <= COMMENTS_LENGTH;
};

// Добавляем валидатор к указанному элементу формы и связываем его с соотвествующей функцией проверки

pristine.addValidator(hashtagInputElement, validateHashtag, 'Хэш-тег начинается с символа #, строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы, быть длиной до 20 символов');
pristine.addValidator(hashtagInputElement, validateHashtagUnique, 'Хэштеги не могут повторяться');
pristine.addValidator(hashtagInputElement, validateHashtagAmount, 'Максимум 5 хэштегов');
pristine.addValidator(commentsInputElement, validateComments, 'Длина комментария не может составлять больше 140 символов');

const onSubmitForm = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
  } else {
    imageLoadingTextContainer.firstChild.textContent = 'Проверьте правильность введеных хэштегов и комментариев, длина комментария не может составлять больше 140 символов';
  }
};

imageLoadingFormElement.addEventListener('submit', onSubmitForm);

export {errorMessageTemplateElement};
