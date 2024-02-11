import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import Axios from 'axios';

import { renderPictures, imgTemplate } from "./js/render_functions";
import { showBtnLoader, hideBtnLoader, showLoader, hideLoader } from "./js/showloader";
import { errorShow, theendShow } from "./js/izitoastshow";

import refs from "./js/refs";
const {formEl, imgContainer, loaderBtn} = refs;

import { PicturesAPI } from "./js/pixabay_api";
const pictureAPI = new PicturesAPI();

let currentPage;
const PER_PAGE = 15;
let query = '';

formEl.addEventListener('submit', onFormSubmit);
async function onFormSubmit(e) {
  e.preventDefault();
  query = e.target.elements.text.value.trim();
  if (query === '') {
      imgContainer.innerHTML = '';
      return
  };
  
  imgContainer.innerHTML = '';
  showLoader();
  currentPage = 1;
  const { totalHits, hits } = await pictureAPI.getPictures(query, currentPage, PER_PAGE);
 
  // перевірка, що картинки знайдені
  if (hits.length === 0) {
     errorShow();
     formEl.reset();
     hideLoader();
     return;
  }
  
  renderPictures(hits);
  // модульне вікно з бібліотеки   
  let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', showCounter: false });
    
  formEl.reset();
  hideLoader();
  isLastPage(totalHits);
}

loaderBtn.addEventListener('click', loadMore)
async function loadMore() {
  currentPage += 1;
  showLoader();
  hideBtnLoader();

  const { totalHits, hits } = await pictureAPI.getPictures(query, currentPage, PER_PAGE);
  renderPictures(hits);
  
  hideLoader();
  isLastPage(totalHits);

}

function isLastPage(totalHits) {
  if (currentPage <= totalHits/PER_PAGE) {
     showBtnLoader();
  } else {
    theendShow();
  }
}


