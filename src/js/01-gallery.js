import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery')
console.log(galleryItems);
function renderGallery(items){
    return items.map(({preview, original, description})=>{
        return(`
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
          />
        </a>
      </li>    
        `)
    })
}
galleryList.insertAdjacentHTML('beforeend',renderGallery(galleryItems))