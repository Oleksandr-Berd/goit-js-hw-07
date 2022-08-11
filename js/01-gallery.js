import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesRef = galleryItems.map((element) => {
  return `<div class="gallery__image">
  <a class="gallery__link" href="${element.original}">
  <img
      class="gallery__image"
      src="${element.preview}"
      data-source="l${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
});

const myGallery = document.querySelector(".gallery");

myGallery.insertAdjacentHTML("afterbegin", imagesRef.join(""));

console.log(myGallery);
