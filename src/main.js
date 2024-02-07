import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Axios from 'axios';

// import { PicturesAPI } from "./js/imagesAPI";
// const pictureAPI = new PicturesAPI();

const formEl = document.querySelector('.form-search');
const imgContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

// Ховаємо лоадер
loaderContainer.style.display = 'none';

// Запит на сервер pixabay для отримання картинок
async function getPictures(searchText) {
   const BASE_URL = 'https://pixabay.com/api';
    const API_KEY = '/?key=42190673-143cbde4cd6a94de75e31d0a4';
    const SEARCH_PARAMS = `&q=${searchText}`;
    const PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true';
    
    const url = BASE_URL + API_KEY + SEARCH_PARAMS + PARAMS; 

    const response = await Axios.get(url);
    console.log('Запит на сервер', response.data);
    return response.data;
}

formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.text.value;
        if (query === '') {
        return
    };

    // Очищуємо контейнер, показуємо лоадер
    imgContainer.innerHTML = '';
    loaderContainer.style.display = 'flex';

// Викликаєм функцію звернення на сервер, Створюємо галерею
    const {total, hits} = await getPictures(query);
    console.log('onFormSubmit', total, hits);

// перевірка, що картинки знайдені
    if (total === 0) {
        errorShow();
             // очищуємо форму, ховаємо лоадер
            formEl.reset();
            loaderContainer.style.display = 'none';
        return;
    }

    const markup = hits.map(imgTemplate).join('');
    imgContainer.innerHTML = markup;

     // модульне вікно з бібліотеки   
    let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', showCounter: false });
    gallery.refresh();

     // очищуємо форму, ховаємо лоадер
    formEl.reset();
    loaderContainer.style.display = 'none';
}


// Формуємо посилання на картинку з інформацією про неї
function imgTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return ` 
  <a href="${largeImageURL}" class="gallery-link">
     <figure>
      <img src="${webformatURL}" alt="${tags}" class="gallery-image">
      <figcaption class="gallery-figcaption">
        <div class="image-item">Likes <span class="image-elem">${likes}</span></div>
        <div class="image-item">Views <span class="image-elem">${views}</span></div>
        <div class="image-item">Comments <span class="image-elem">${comments}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${downloads}</span></div>
  </figcaption>
  </figure>
</a >`
    }

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