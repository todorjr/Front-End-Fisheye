import {getPhotographerById,getMediaByPhotographers} from "../api/index.js";
import {photographerFactory} from "../factories/photographerFactory.js"
import {photographerGalleryFactory} from "../factories/photographerGalleryFactory.js"

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function displayData(photographer, medias) {

    const photographersSection = document.querySelector(".photograph-header");
    const photographerGallery = document.querySelector(".photographer-gallery");

      const path = `assets/photographers_photos/${photographer.name}`
      const photographerModel = photographerFactory(photographer);
      const photographerGalleryImage = photographerGalleryFactory(
        medias,path
      );

      const userGallery = photographerGalleryImage.getUserGallery();
      const userCardDOM = photographerModel.getUserMedia();
      const userPhotoDOM = photographerModel.getUserPhoto();

      photographerGallery.appendChild(userGallery);
      photographersSection.appendChild(userCardDOM);
      photographersSection.appendChild(userPhotoDOM);
      };
  
  
  async function init() {
    // Récupère les datas des photographes
    
    const photographers = await getPhotographerById(parseInt(photographerId));
    const medias = await getMediaByPhotographers(parseInt(photographerId));

    console.log(photographers,"photographer");
    console.log(medias,"media");

    displayData(photographers, medias);
  }
  
  init();
