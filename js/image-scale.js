const image = document.getElementById('image');
const scaleValue = document.querySelector('.scale__control--value');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');

let currentScale = 1;

smallerButton.addEventListener('click', () => {
  currentScale -= 0.25;
  if (currentScale < 0.25) currentScale = 0.25;
  applyScale();
});

biggerButton.addEventListener('click', () => {
  currentScale += 0.25;
  if (currentScale > 1) currentScale = 1;
  applyScale();
});

function applyScale() {
  image.style.transform = `scale(${currentScale})`;
  scaleValue.value = `${Math.round(currentScale * 100)}%`;
}
