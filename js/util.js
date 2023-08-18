// Функция для нахождения случайного целого числа

// eslint-disable-next-line no-unused-vars
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};

// Функция для проверки максимальной длины строки

// eslint-disable-next-line arrow-body-style
const checkMaxLengthString = (string, maxLength) => {
  return maxLength >= string.length;
};

// eslint-disable-next-line no-console
console.log(checkMaxLengthString('проверяемая строка', 20));

// eslint-disable-next-line arrow-body-style
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

export {getRandomArrayElement};
