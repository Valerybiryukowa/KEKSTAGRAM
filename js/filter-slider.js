const effectControlListElement = document.querySelector('.effects__list');
const effectControlContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelSliderElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const imagePreviewElement = document.querySelector('.img-upload__preview').querySelector('img');

const filterValues = {
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none'
};

effectLevelValueElement.value = 1;
effectControlContainerElement.classList.add('hidden');

noUiSlider.create(effectLevelSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: value => {
        return Math.round(value);
    },
    from: value => {
        return parseFloat(value);
    }
}
});

const filterReset = () => {
  imagePreviewElement.classList = '';
  imagePreviewElement.style.filter = '';
  effectControlContainerElement.classList.add('hidden');
};

const onFilterChange = (evt) => {
  imagePreviewElement.classList = `effects__preview--${evt.target.value}`;
  if (evt.target.value === filterValues.NONE) {
    imagePreviewElement.classList = '';
    imagePreviewElement.style.filter = '';
    effectControlContainerElement.classList.add('hidden');
  } else if (evt.target.value === 'chrome') {
    effectLevelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    effectControlContainerElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.SEPIA) {
    effectLevelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    effectControlContainerElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.MARVIN) {
    effectLevelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    effectControlContainerElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.PHOBOS) {
    effectLevelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    effectControlContainerElement.classList.remove('hidden');
  } else if (evt.target.value === filterValues.HEAT) {
    effectLevelSliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    effectControlContainerElement.classList.remove('hidden');
  }
};

effectLevelSliderElement.noUiSlider.on('update', () => {
  effectLevelValueElement.value = effectLevelSliderElement.noUiSlider.get();

  if (imagePreviewElement.classList.contains('effects__preview--chrome')) {
    imagePreviewElement.style.filter = `grayscale(${effectLevelValueElement.value})`;
  } else if (imagePreviewElement.classList.contains('effects__preview--sepia')) {
    imagePreviewElement.style.filter = `sepia(${effectLevelValueElement.value})`;
  } else if (imagePreviewElement.classList.contains('effects__preview--marvin')) {
    imagePreviewElement.style.filter = `invert(${effectLevelValueElement.value * 100}%)`;
  } else if (imagePreviewElement.classList.contains('effects__preview--phobos')) {
    imagePreviewElement.style.filter = `blur(${effectLevelValueElement.value * 3}px)`;
  } else if (imagePreviewElement.classList.contains('effects__preview--heat')) {
    imagePreviewElement.style.filter = `brightness(${effectLevelValueElement.value})`;
  }
});

effectControlListElement.addEventListener('change', onFilterChange);

export {filterReset};
