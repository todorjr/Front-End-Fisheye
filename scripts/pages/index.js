import {getPhotographers} from "../api/index.js"
import ArtistFactory from "../factories/ArtistFactory.js"

async function displayData(photographer) {
    const photographersSection = document.querySelector(".photographer_section");
  
    photographer.forEach((photographer) => {
      const photographerModel = new ArtistFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
    });
  }
  
  async function init() {
    // Récupère les datas des photographes
    const  photographers  = await getPhotographers();
    displayData(photographers);
  }
  
  init();

