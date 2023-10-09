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
const checkMaxLengthString = (string, length) => {
  return string.length <= length;
};

checkMaxLengthString('htmlacademy', 20);

// eslint-disable-next-line arrow-body-style
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

// Функция с сообщением об ошибке, если форма не отправилась на сервер

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  // Сообщение с ошибкой на пять секунд
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

// Функция по устранению дребезга

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };

export { getRandomArrayElement, isEscapeKey, isEnterKey, showAlert, debounce };
