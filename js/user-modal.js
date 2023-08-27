import './picture-max';
import './picture-min';
import {isEscapeKey, isEnterKey} from './util';
import {showPhoto, clearPhoto} from './picture-min';

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
  showPhoto();

  document.addEventListener('keydown', onFormEscKeydown);
};

function closeUserForm () {
  userImageLoading.classList.add('hidden');
  clearPhoto();

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

openUserForm();



