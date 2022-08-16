import {getPhotographerById} from "../api/media.js"
import {photographerMediaFactory} from "../factories/photographerMediaFactory.js"

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      if (photographer.id == photographerId){
      const photographerModel = photographerMediaFactory(photographer);
      const userCardDOM = photographerModel.getUserMedia();
      const userPhotoDOM = photographerModel.getUserPhoto();
      photographersSection.appendChild(userCardDOM);
      photographersSection.appendChild(userPhotoDOM);
      }
    });
  }
  
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerById();
    displayData(photographers);
  }
  
  init();
