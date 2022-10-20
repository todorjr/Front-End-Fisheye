import {getPhotographerById,getMediaByPhotographers} from "../api/index.js";
import FactoryMedia from "../factories/FactoryMedia.js";

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function displayData(photographer, medias) {

    const photographerGallery = document.querySelector(".photographer-gallery");

      const path = `assets/photographers_photos/${photographer}`
    
      medias.forEach((media) => {
        let item = new FactoryMedia({...media,path:path})
        const element = item.toElement()
        photographerGallery.appendChild(element)
    })
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
