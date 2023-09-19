import './picture-max';
import './picture-min';
import {isEscapeKey, isEnterKey} from './util';

const userImageLoading = document.querySelector('.img-upload__overlay');
const openForm = document.querySelector('body');
openForm.classList.add('modal-open');


const userModalOpenForm = document.querySelector('#upload-file');
const userModalCloseForm = document.querySelector('#upload-cancel');

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserForm();
  }
};

function openUserForm () {
  userImageLoading.classList.remove('hidden');
  document.addEventListener('keydown', onFormEscKeydown);
};

function closeUserForm () {
  userImageLoading.classList.add('hidden');
  document.removeEventListener('keydown', onFormEscKeydown);
};

userModalOpenForm.addEventListener('click', () => {
  openUserForm();
});

userModalOpenForm.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserForm();
  }
});

userModalCloseForm.addEventListener('click', () => {
  closeUserForm();
});

userModalCloseForm.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserForm();
  }
});

// Эта функция есть в сокращенном виде в util js, написала здесь чтобы проверить обработчик в консоли
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userImageLoading.classList.add('hidden');
  }
});

// // Эта функция есть в сокращенном виде в util js, написала здесь чтобы проверить обработчик в консоли, заработал
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    userImageLoading.classList.remove('hidden');
  }
});

export {openUserForm, closeUserForm, userModalOpenForm};



