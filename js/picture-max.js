//const body = document.querySelector('body');
import { isEscapeKey } from './util';

const modalPicture = document.querySelector('.big-picture');
const bigPicture = modalPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureContentElement = modalPicture.querySelector('.big-picture__social');
const countLikes = bigPictureContentElement.querySelector('.social__likes').querySelector('.likes-count');
const countComments = bigPictureContentElement.querySelector('.social__comment-count').querySelector('.comments-count');
const socialComments = bigPictureContentElement.querySelector('.social__comments');
const commentTemplateElement = bigPictureContentElement.querySelector('.social__comment');
const socialCaption = bigPictureContentElement.querySelector('.social__caption');
const socialCommentCount = bigPictureContentElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureContentElement.querySelector('.comments-loader');
const cancelButton = modalPicture.querySelector('.big-picture__cancel');

const COMMENTS_AMOUNT = 5;

const renderCommentsList = (avatar, username, message) => {
  const commentFragment = document.createDocumentFragment();

  const commentItem = commentTemplateElement.cloneNode(true);

  const avatarElement = commentItem.querySelector('.social__picture');
  avatarElement.src = avatar;
  const commentTextElement = commentItem.querySelector('.social__text');
  avatarElement.alt = username;
  commentTextElement.textContent = message;
  commentFragment.append(commentItem);

  const commentListFragment = document.createDocumentFragment();
  commentListFragment.append(commentFragment);
  socialComments.append(commentListFragment);
};

const showCommentsList = (comments) => {
  socialComments.innerHTML = '';
  const showComments = comments.slice(0, COMMENTS_AMOUNT);
  showComments.forEach(({avatar, username, message}) => renderCommentsList(avatar, username, message));

  if (socialComments.children.length === comments.length) {
    commentsLoader.classList.add('hidden');
  }

  socialCommentCount.firstChild.textContent = `${socialComments.children.length} из `;

  const onCommentLoad = (evt) => {
    evt.preventDefault();
    const commentsCount = socialComments.children.length;
    const otherComments = comments.slice(commentsCount, commentsCount + COMMENTS_AMOUNT);
    otherComments.forEach(({avatar, username, message}) => renderCommentsList(avatar, username, message));
    socialCommentCount.firstChild.textContent = `${socialComments.children.length} из `;
    if (otherComments.length < COMMENTS_AMOUNT) {
      commentsLoader.classList.add('hidden');
  }
};

commentsLoader.addEventListener('click', onCommentLoad);

const onClickClose = (evt) => {
  evt.preventDefault();
  modalPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  socialComments.innerHTML = '';
  commentsLoader.removeEventListener('click', onCommentLoad);
  commentsLoader.classList.remove('hidden');
};


cancelButton.addEventListener('click', onClickClose);

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onClickClose(evt);
  }
});
};

const renderBigPicture = (url, likes, description, comments) => {
  bigPicture.src = url;
  bigPicture.alt = description;
  countLikes.textContent = likes;
  socialCaption.textContent = description;
  countComments.textContent = comments.length;
}

export { renderBigPicture, modalPicture, bigPictureContentElement, renderCommentsList, showCommentsList, commentsLoader, socialCommentCount };
