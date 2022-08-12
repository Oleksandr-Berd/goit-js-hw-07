import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const basicLightbox = require("basiclightbox");

// import * as basicLightbox from "basicLightbox";

const galleryLayout = createLayout(galleryItems);

function createLayout(galleryItems) {
  return galleryItems
    .map((element) => {
      return `<div class="gallery__image">
  <a class="gallery__link" href="${element.original}">
  <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const myGallery = document.querySelector(".gallery");

myGallery.insertAdjacentHTML("afterbegin", galleryLayout);

myGallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const urlImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${urlImg}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", onEscPress);

  function onEscPress(evt) {
    if (evt.code === "Tab") {
      instance.close();
    }
  }
}
