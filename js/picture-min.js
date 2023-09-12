import {openModalPicture} from './picture-max.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const errorMessageBlock = document.querySelector('.error-message');


const createPhotoTemplate = (element) => {
  const photoElement = photoTemplate.cloneNode(true);
  const photoImage = photoElement.querySelector('.picture__img');
  const photoComments = photoElement.querySelector('.picture__comments');
  const photoLikes = photoElement.querySelector('.picture__likes');

  photoElement.dataset.id = element.id;
  photoImage.src = element.url;
  photoComments.textContent = element.comments.length;
  photoLikes.textContent = element.likes;

  return photoElement;
};

const showPhoto = (createPhotoTemplate) => {
  const photoListFragment = document.createDocumentFragment();

  photos.forEach(photo => {
    const pictures = createPhotoTemplate(photo);

    photoListFragment.appendChild(pictures);
  });

  photoContainer.appendChild(photoListFragment);
};

const clearPhoto = () => {
  photoContainer.innerHTML = '';
};

// Функция для показа сообщения об ошибке
const showErrorMessage = () => {
  errorMessageBlock.classList.remove('hidden');
}

// Функция для скрытия сообщения об ошибке
const hideErrorMessage = () => {
  errorMessageBlock.classList.add('hidden');
}

export {photoContainer, showPhoto, clearPhoto};


