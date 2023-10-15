import { modalPicture, renderBigPicture, showCommentsList} from './picture-max.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const showPhoto = (posts) => {
  const photoListFragment = document.createDocumentFragment();

  posts.forEach(({ url, description, likes, comments }) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  const photoInfo = photoElement.querySelector('.picture__info');
  photoInfo.querySelector('.picture__comments').textContent = comments.length;
  photoInfo.querySelector('.picture__likes').textContent = likes;

  photoListFragment.append(photoElement);

  const onMinPictureOpen = (evt) => {
    evt.preventDefault();
    modalPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    showCommentsList(comments);
    renderBigPicture(url, description, likes, comments);
  };

  photoElement.addEventListener('click', onMinPictureOpen);
  });

  document.querySelectorAll('.picture').forEach((photoElement) => photoElement.remove());

  const photoElementFragment = document.createDocumentFragment();
  photoElementFragment.append(photoListFragment);
  photoContainer.append(photoElementFragment);
};

const clearPhoto = () => {
  photoContainer.innerHTML = '';
};

export {photoContainer, showPhoto, clearPhoto};

