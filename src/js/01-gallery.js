// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
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
