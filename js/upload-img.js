import {userModalOpenForm, userModalCloseForm} from './user-modal';
import {errorMessageTemplateElement} from './validation-form';
import {scaleReset} from './image-scale';
import {filterReset} from './filter-slider';
import {isEscapeKey} from './util';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const imageUploadOverlayElement = document.querySelector('.img-upload__overlay');
const imageLoadingFormElement = document.querySelector('.img-upload__form');
const inputsElements = document.querySelectorAll('input');
const textDescriptionElement = document.querySelector('.text__description');

// Функция для загрузки пользователями новых изображений

userModalOpenForm.addEventListener('change', () => {
  const file = userModalOpenForm.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((end) => fileName.endsWith(end));

  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});

const onFileUploadClose = () => {
  imageUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageLoadingFormElement.reset();
  scaleReset();
  filterReset();
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt) && (errorMessageTemplateElement !== document.body.lastChild)) {
    evt.preventDefault();
    onFileUploadClose();
  }
});

const onFileUploadOpen = () => {
  imageUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

userModalOpenForm.addEventListener('change', onFileUploadOpen);
userModalCloseForm.addEventListener('click', onFileUploadClose);

inputsElements.forEach((input) => input.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}));

textDescriptionElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});

export {onFileUploadClose, imgPreview, textDescriptionElement};
