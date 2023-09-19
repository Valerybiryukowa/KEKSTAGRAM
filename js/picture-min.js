import {openModalPicture} from './picture-max.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');


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

  createPhotoTemplate.forEach(photo => {
    const pictures = createPhotoTemplate(photo);

    photoListFragment.appendChild(pictures);
  });

  photoContainer.appendChild(photoListFragment);
};

const clearPhoto = () => {
  photoContainer.innerHTML = '';
};


export {photoContainer, showPhoto, clearPhoto};


