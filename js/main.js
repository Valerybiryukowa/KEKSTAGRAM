import './data.js';
import {galleryPhotos} from './data.js';
import './picture-min.js';
import './picture-max.js';
import './util.js';
import {closeUserForm} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import './validation-form.js';
import './image-scale.js';
import './filter-slider.js';
import {showPhoto} from './picture-min.js';
import {getData} from './api.js';
import {debounce} from './util.js';


// eslint-disable-next-line no-console
console.log(
  galleryPhotos()
);

getData((photos) => {
  showPhoto(photos);
});

setUserFormSubmit(closeUserForm);

