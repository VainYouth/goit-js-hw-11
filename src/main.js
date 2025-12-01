import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, showLoader, hideLoader, makeMarkup, } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ===================================================================
// ЄЛЕМЕНТИ
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type=submit]');
const input = document.querySelector('input[name="search-text"]');

submitBtn.disabled = true;

// ===================================================================
// ПОДІЯ інпут
input.addEventListener('input', evt => {
  submitBtn.disabled = evt.target.value.trim() === '';
});

// ===================================================================
// ПОДІЯ сабміт
form.addEventListener('submit', evt => {
  evt.preventDefault();
  showLoader();

  const searchWord = input.value.trim();

  if (!searchWord) {
    hideLoader();
    return;
  }

  clearGallery();

  getImagesByQuery(searchWord)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.warning({
          title: 'Немає результатів',
          message: `Зображення за запитом "${searchWord}" не знайдено.`,
          position: 'topRight',
        });
        return;
      }

      makeMarkup(data.hits);
    })
    .catch(() => {
      iziToast.error({
        title: 'Помилка',
        message: 'Сталася помилка під час отримання даних. Спробуйте ще раз.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
      submitBtn.disabled = true;
    });
});
