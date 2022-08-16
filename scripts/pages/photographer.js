import {getPhotographerById} from "../api/media.js"
import {photographerMediaFactory} from "../factories/photographerMediaFactory.js"


async function displayData(medias) {
    const photographersSection = document.querySelector(".photograph-header");
    medias.forEach((media) => {
      const photographerModel = photographerMediaFactory(media);
      const userCardDOM = photographerModel.getUserMedia();
      photographersSection.appendChild(userCardDOM);
    });
  }
  
  async function init() {
    // Récupère les datas des photographes
    const { medias } = await getPhotographerById();
    displayData(medias);
  }
  
  init();

