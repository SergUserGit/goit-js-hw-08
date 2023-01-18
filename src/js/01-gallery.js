// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const strMarkup = galleryItems.map(el => {
  const newElem =
    '<a class="gallery__item"' +
    'href = "' +
    el.original +
    '">' +
    '<img class="gallery__image" src="' +
    el.preview +
    '" alt="' +
    el.description +
    '" />' +
    '</a>';
  return newElem;
});

const elemGallery = document.querySelector('.gallery');

elemGallery.insertAdjacentHTML('afterbegin', strMarkup.join(''));

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});