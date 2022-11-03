// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galllery = document.querySelector('.gallery');


const markup = galleryItems
.map(({preview, original, description}) => 
    `<div class = "gallery__item">
<a class = "galllery__link" href = "${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt='${description}'>
</img>
</a>
</div>
`)
    .join('');

galllery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionPosition: 'button'
        
    })
