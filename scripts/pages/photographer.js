import {getPhotographerById} from "../api/media.js"
import {photographerMediaFactory} from "../factories/photographerMediaFactory.js"
import {photographerGalleryFactory} from "../factories/photographerGalleryFactory.js"

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function displayData(photographer) {

    const photographersSection = document.querySelector(".photograph-header");
    const photographerGallery = document.querySelector(".photographer-gallery");

    // photographers.forEach((photographer) => {

      // if (photographer.id == photographerId){
      const photographerModel = photographerMediaFactory(photographer);
      const photographerGalleryImage = photographerGalleryFactory(photographer);

      const userGallery = photographerGalleryImage.getUserGallery();
      const userCardDOM = photographerModel.getUserMedia();
      const userPhotoDOM = photographerModel.getUserPhoto();

      photographerGallery.appendChild(userGallery);
      photographersSection.appendChild(userCardDOM);
      photographersSection.appendChild(userPhotoDOM);
      };
  
  
  async function init() {
    // Récupère les datas des photographes
    const photographers  = await getPhotographerById(photographerId);
    displayData(photographers);
  }
  
  init();
