const sliderElement = document.querySelector('.img-upload__effect-level');
const valueElement = document.querySelector('.effect-level__value');
const listElement = document.querySelector('.effects__list');
const levelSliderElement = document.querySelector('.effect-level__slider');
const imagePreviewElement = document.querySelector('.img-upload__preview').querySelector('img');

const filterValues = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none'
};

valueElement.value = 1;
sliderElement.classList.add('hidden');


noUiSlider.create(levelSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isItenger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const filterReset = () => {
  imagePreviewElement.classList = '';
  imagePreviewElement.style.filter = '';
  sliderElement.classList.add('hidden');
};


const onFilterChange = (evt) => {
  imagePreviewElement.classList = `effects__preview--${evt.target.value}`;
  if (evt.target.value === filterValues.NONE) {
  imagePreviewElement.classList = '';
  imagePreviewElement.style.filter = '';
  sliderElement.classList.add('hidden');
  } else if (evt.target.value === 'chrome') {
    levelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.SEPIA) {
    levelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.MARVIN) {
    levelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.PHOBOS) {
    levelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.HEAT) {
    levelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.classList.remove('hidden');
  }
};

levelSliderElement.noUiSlider.on('update', () => {
  valueElement.value = levelSliderElement.noUiSlider.get();

  if (imagePreviewElement.classList.value === 'effects__preview--chrome') {
    imagePreviewElement.style.filter = `grayscale(${valueElement.value})`;
  } else if (imagePreviewElement.classList.value === 'effects__preview--sepia') {
    imagePreviewElement.style.filter = `sepia(${valueElement.value})`;
  } else if (imagePreviewElement.classList.value === 'effects__preview--marvin') {
    imagePreviewElement.style.filter = `invert(${valueElement.value}%)`;
  } else if (imagePreviewElement.classList.value === 'effects__preview--phobos') {
    imagePreviewElement.style.filter = `blur(${valueElement.value}px)`;
  } else if (imagePreviewElement.classList.value === 'effects__preview--heat') {
    imagePreviewElement.style.filter = `brightness(${valueElement.value})`;
  }
});

listElement.addEventListener('change', onFilterChange);

export {filterReset};
