import {userModalOpenForm} from './user-modal';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

// Функция для загрузки пользователями новых изображений

userModalOpenForm.addEventListener('change', () => {
  const file = userModalOpenForm.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
