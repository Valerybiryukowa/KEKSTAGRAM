import {debounce, showAlert} from './util';
import {getData} from './api';
import {showPhoto} from './picture-min';

const imgFiltersElement = document.querySelector('.img-filters');
const imgFiltersButton = document.querySelectorAll('.img-filters__button');
const filterButtonDefault = imgFiltersElement.querySelector('#filter-default');
const filterButtonRandom = imgFiltersElement.querySelector('#filter-random');
const filterButtonDiscussed = imgFiltersElement.querySelector('#filter-discussed');

const RANDOM_IMAGES_MAX = 10;
const RERENDER_DELAY = 500;

const imgFiltersControl = () => {
  imgFiltersElement.classList.remove('.img-filters--inactive');

  imgFiltersButton.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const activeButtonElement = document.querySelector('.img-filters__button--active');

      if (activeButtonElement) {
        activeButtonElement.classList.remove('img-filters__button--active');
      }

      evt.target.classList.add('img-filters__button--active');
    });
  });
};

const imgFilterDiscussed = (photos) => {
  const photosCopy = photos.slice();

  return photosCopy.sort((a, b) => b.comments.length - a.comments.length);
}

const imgFilterRandom = (photos) => {
  const photosCopy = photos.slice();

  return photosCopy.sort(() => 0.5 - Math.random()).slice(0, RANDOM_IMAGES_MAX);
}

// Эти функции добавляют обработчик события клика на кнопки. При клике на эту кнопку будет выполнена функция обратного вызова, переданная как аргумент.

const onDefaultLoad = (cb) => {
  filterButtonDefault.addEventListener('click', () => {
    cb();
  });
};

const onRandomLoad = (cb) => {
  filterButtonRandom.addEventListener('click', () => {
    cb();
  });
};

const onDiscussedLoad = (cb) => {
  filterButtonDiscussed.addEventListener('click', () => {
    cb();
  });
};

getData()
.then((posts) => {
  showPhoto(posts);
  onDefaultLoad(debounce(() => showPhoto(posts), RERENDER_DELAY));
  onRandomLoad(debounce(() => showPhoto(imgFilterRandom(posts)), RERENDER_DELAY));
  onDiscussedLoad(debounce(() => showPhoto(imgFilterDiscussed(posts)), RERENDER_DELAY));
})
.then(() => imgFiltersControl())
.catch(() => showAlert('Не удалось загрузить страницу, попробуйте позже'));

