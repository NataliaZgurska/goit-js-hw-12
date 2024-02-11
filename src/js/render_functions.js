// Розмітка для 1 картинки
export function imgTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
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


// Рендеримо галерею
export function renderPictures(aray) {
    const markup = aray.map(imgTemplate).join('');
    return markup;
}