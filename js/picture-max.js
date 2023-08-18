const body = document.querySelector('body');
const modalPicture = document.querySelector('.big-picture');
const bigPicture = modalPicture.querySelector('.big-picture__img img');
const countLikes = modalPicture.querySelector('.likes-count');
const countComments = modalPicture.querySelector('.comments-count');
const socialComments = modalPicture.querySelector('.social__comments');
const socialCaption = modalPicture.querySelector('social__caption');
const socialCommentCount = modalPicture.querySelector('.social__comment-count');
const commentsLoader = modalPicture.querySelector('.comments-loader');
const cancelButton = modalPicture.querySelector('.big-picture__cancel');

const LI_CLASS_NAME = 'social__comment';
const IMG_CLASS_NAME = 'social__picture';
const PAR_CLASS_NAME = 'social__text';
const COMMENT_AVATAR_SIZE = 35;
const COMMENTS_AMOUNT = 5;

const createComments = (comments) => {
  socialComments.innerHtml = '';

  if (comments) {
    comments.forEach(comment => {
      const newLi = document.createElement('li');
      const newImg = document.createElement('img');
      const newP = document.createElement('p');

      newLi.className = LI_CLASS_NAME;
      newImg.className = IMG_CLASS_NAME;
      newImg.src = comment.avatar;
      newImg.alt = comment.name;
      newImg.width = COMMENT_AVATAR_SIZE;
      newImg.height = COMMENT_AVATAR_SIZE;
      newP.className = PAR_CLASS_NAME;
      newP.textContent = comment.message;

      newLi.appendChild(newImg);
      newLi.appendChild(newP);
      socialComments.appendChild(newLi);
    });
  }
};

const openModalPicture = (photo) => {
  body.classList.add('modal-open');
  modalPicture.classList.remove('hidden');

  bigPicture.src = photo.url;
  bigPicture.alt = '';
  countLikes.textContent = photo.likes;
  countComments.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
  socialCommentCount.hidden = true;
  commentsLoader.hidden = true;

  createComments(photo.comments);
};

const closeModalPicture = () => {
  modalPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onCommentsLoaderClick = () => {
  const hiddenComments = socialComments.querySelectorAll('.social__comment.hidden');
  const commentsList = socialComments.querySelectorAll('.social__comment');

  socialCommentCount.textContent = `${commentsList.length - hiddenComments.length + COMMENTS_AMOUNT} из ${commentsList.length} комментариев`;

  if (hiddenComments.length <= COMMENTS_AMOUNT) {
    commentsLoader.hidden = true;
    socialCommentCount.textContent = `${commentsList.length} из ${commentsList.length} комментариев`;
  }

  for (let i = 0; i < COMMENTS_AMOUNT; i++) {
    if (hiddenComments[i]) {
      hiddenComments[i].classList.remove('hidden');
    }
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModalPicture();
  }
};

const onCancelButtonClick = () => closeModalPicture();

export {openModalPicture};


