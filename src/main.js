import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Axios from 'axios';

import { renderPictures, imgTemplate } from "./js/render_functions";

import { PicturesAPI } from "./js/pixabay_api";
const pictureAPI = new PicturesAPI();

const formEl = document.querySelector('.form-search');
const imgContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');
const loadBtn = document.querySelector('.js-load-btn')

// Ховаємо лоадер і кнопку load more
loaderContainer.style.display = 'none';
// loadBtn.style.display = 'none';

formEl.addEventListener('submit', onFormSubmit);

let currentPage = 1;

async function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.text.value.trim();
  if (query === '') {
        imgContainer.innerHTML = '';
        return
    };

    // Очищуємо контейнер, показуємо лоадер
    imgContainer.innerHTML = '';
    loaderContainer.style.display = 'flex';

    // Викликаєм функцію звернення на сервер, Створюємо галерею
    const { total, hits } = await pictureAPI.getPictures(query, currentPage);
   
    // перевірка, що картинки знайдені
      if (hits.length === 0) {
        errorShow();
             // очищуємо форму, ховаємо лоадер
            formEl.reset();
            loaderContainer.style.display = 'none';
        return;
    }

    imgContainer.innerHTML = renderPictures(hits);

    // модульне вікно з бібліотеки   
    let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', showCounter: false });
    
    // очищуємо форму, ховаємо лоадер, викликаємо кнопку load more
    // gallery.refresh();
    formEl.reset();
  loaderContainer.style.display = 'none';
  loadBtn.style.display = 'block';
}

loadBtn.addEventListener('submit', loadMore)

function loadMore(e) {
  e.preventDefault();
  currentPage += 1;
  // Викликаємо лоадер і ховаємо кнопку load more
  // loaderContainer.style.display = 'flex';
  // loadBtn.style.display = 'none';

console.log('hello');
}


// ******************************************
// спливаюче вікно про помилку бібліотеки iziToast
function errorShow() {
              iziToast.show({
                    close: true,
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                  messageColor: '#FFFFFF',
                    messageSize: '10px',
                    backgroundColor: '#B51B1B',
                    position: 'topRight',
                    close: true,
                  timeout: 10000,
                  progressBarColor: '#FFFFFF',
                  maxWidth: '380px',
                    });
}