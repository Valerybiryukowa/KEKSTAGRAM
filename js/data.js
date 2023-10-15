import {getRandomArrayElement, getRandomInteger} from './util.js';

// eslint-disable-next-line no-unused-vars
const likesComments = {min: 15, max: 200};
const idComments = {min: 1, max: 100};
const avatarComments = {min: 1, max: 6};
const nameComments = {min: 1, max: 6};
const messageComments = {min: 0, max: 6};
const cardsComments = {min: 1, max: 3};
const GALLERY_PHOTOS_COUNT = 25;

/* Создать массив из 25 сгенерированных объектов
 Объект состоит из трех ключей:
 id, число — идентификатор описания.
 url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Значения взять из данных
 description, строка — описание фотографии.
 likes, число — количество лайков, поставленных фотографии.
 comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
*/

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const URL = [
  'photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg',
  'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'
];

// eslint-disable-next-line no-unused-vars
const DESCRIPTION = [
  'Большая фотография',
  'Фото поменьше',
  'Солнечный день',
  'Морозное утро',
  'Прекрасное времяпровождение',
  'На фильме',
  'Ветер расвивает шерсть',
  'Доблестный рыцарь',
  'Продуктивный день',
  'На работе',
  'На отдыхе',
  'Пришел за покупками',
  'Встреча с друзьями',
  'Танцы до утра',
  'Пушистый',
  'Красивый вид',
  'Планы на день',
  'Великолепный вечер',
  'В путешествии',
  'Настроение отменное',
  'Шикарная погода',
  'В поисках книги',
  'Вечер за фильмом',
  'Составляем план',
  'Это успех',
];

// eslint-disable-next-line no-unused-vars
const LIKES = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
  67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
  158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200];


const BASECOMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMEBASE = ['Виктор', 'Алексей', 'Иван', 'Георгий', 'Леонид', 'Вячеслав'];

const getArrRandomNumber = (min, max) => {
  const arrRandomNumber = [];
  for (let i = min; i <= max; i++) {
    // eslint-disable-next-line no-undef
    let a = getRandomInteger(min, max);
    while (arrRandomNumber.includes(a)) {
      // eslint-disable-next-line no-undef
      a = getRandomInteger(min, max);
    }
    arrRandomNumber.push(a);
  }
  return arrRandomNumber;
};


const photoCards = [];
const idCommentsCard = getArrRandomNumber(idComments.min, idComments.max);

const createCommentsCard = (idComment) => {
  const avatar = getRandomInteger(avatarComments.min, avatarComments.max);
  const message = BASECOMMENTS[getRandomInteger(messageComments.min, messageComments.max)];
  const name = NAMEBASE[getRandomInteger(nameComments.min, nameComments.max)];
  const commentsCard = {
    id: idComment,
    avatar: 'img/avatar-' + avatar + '.svg',
    message: message,
    name: name,
  };
  return commentsCard;
};

const commentsCards = [];

const createRandomCommentsCard = () => {
  for (let i = 0; i <= idCommentsCard.length - 1; i++) {
    commentsCards[i] = createCommentsCard();
    commentsCards[i].id = idCommentsCard[i];
  }
  return commentsCards;
};

const randomCommentsCard = createRandomCommentsCard();

const createCardsComments = () => {
  const arrcardsComments = randomCommentsCard.splice(0, getRandomInteger(cardsComments.min, cardsComments.max));

  return arrcardsComments;
};

const likeslPhotoCard = getRandomInteger(likesComments.min, likesComments.max);

const createDescriptionPhotos = () => {
  return {
    id: getRandomArrayElement(ID),
    url: getRandomArrayElement(URL),
    desription: getRandomArrayElement(DESCRIPTION),
    likes: getRandomArrayElement(LIKES),
    comments: createCardsComments(),
  }
};

const galleryPhotos = () => Array.from({length: GALLERY_PHOTOS_COUNT}, createDescriptionPhotos);

export { galleryPhotos, randomCommentsCard };

