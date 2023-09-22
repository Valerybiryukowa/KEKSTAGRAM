const body = document.querySelector('body');
const modalPicture = document.querySelector('.big-picture');
const bigPicture = modalPicture.querySelector('.big-picture__img img');
const countLikes = modalPicture.querySelector('.likes-count');
const countComments = modalPicture.querySelector('.comments-count');
const socialComments = modalPicture.querySelector('.social__comments');
const socialCaption = modalPicture.querySelector('.social__caption');
const socialCommentCount = modalPicture.querySelector('.social__comment-count');
const commentsLoader = modalPicture.querySelector('.comments-loader');
const cancelButton = modalPicture.querySelector('.big-picture__cancel');

socialCommentCount.classList.remove('hidden');
commentsLoader.classList.remove('hidden');

const LI_CLASS_NAME = 'social__comment';
const IMG_CLASS_NAME = 'social__picture';
const PAR_CLASS_NAME = 'social__text';
const COMMENT_AVATAR_SIZE = 35;
const COMMENTS_AMOUNT = 5;
const COMMENTS_PER_PAGE = 5;


const commentsData = [
  {
    avatar: 'img/avatar-4.svg',
    text: 'Мега фото! Просто обалдеть. Как вам так удалось?'
  },
  {

    avatar: 'img/avatar-3.svg',
    text: 'Да это фоташоп!!!!!!!!',
  },
  {
    avatar: 'img/avatar-2.svg',
    text: 'Всё отлично!',
  },
  {
    avatar: 'img/avatar-5.svg',
    text: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  },
  {
    avatar: 'img/avatar-1.svg',
    text: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  }
];

// Текущая страница с комментариями

let currentPage = 1;

// Функция для отображения комментариев на странице

function displayComments(page) {
  const startIndex = (page - 1) * COMMENTS_PER_PAGE;
  const endIndex = startIndex + COMMENTS_PER_PAGE;

  const commentsToShow = commentsData.slice(startIndex, endIndex);

  socialComments.innerHTML = '';  // Очищаем блок комментариев

  commentsToShow.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarElement = document.createElement('img');
    avatarElement.classList.add('social__picture');
    avatarElement.src = comment.avatar;
    avatarElement.alt = 'Аватар комментатора фотографии';
    avatarElement.width = 35;
    avatarElement.height = 35;

    const textElement = document.createElement('p');
    textElement.classList.add('social__text');
    textElement.textContent = comment.text;

    commentElement.appendChild(avatarElement);
    commentElement.appendChild(textElement);

    socialComments.appendChild(commentElement);
  });

  // Обновляем отображение количества комментариев

  const totalComments = commentsData.length;
  countComments.textContent = totalComments;

// Проверяем, нужно ли скрывать кнопку "Загрузить еще"

if (endIndex >= totalComments) {
  commentsLoader.classList.add('hidden');
} else {
  commentsLoader.classList.remove('hidden');
}
}

// Первоначально отображаем первую страницу комментариев

displayComments(currentPage);

// Пример кода для переключения страниц комментариев (при нажатии на кнопку "Загрузить еще")

function loadMoreComments() {
  currentPage++;
  displayComments(currentPage);
}

// Обработчик для кнопки "Загрузить еще"

commentsLoader.addEventListener('click', loadMoreComments);

const createComments = (comments) => {
  socialComments.innerHTML = '';

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

export {openModalPicture, modalPicture, displayComments};


