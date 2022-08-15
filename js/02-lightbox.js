import { galleryItems } from "./gallery-items.js";
// Change code below this line

const lightboxLayout = createLayout(galleryItems);

function createLayout(galleryItems) {
  return galleryItems
    .map((element) => {
      return `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
    })
    .join("");
}

const myGallery = document.querySelector(".gallery");

myGallery.insertAdjacentHTML("afterbegin", lightboxLayout);

myGallery.addEventListener("click", onClick, { once: true });

function onClick(evt) {
  evt.preventDefault();

  let lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: `alt`,
    captionDelay: 250,
  });

  console.log(lightbox);
}

console.log(myGallery);
