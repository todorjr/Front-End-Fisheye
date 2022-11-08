import {getPhotographerById,getMediaByPhotographers} from "../api/index.js";
import FactoryMedia from "../factories/FactoryMedia.js";
import HeaderFactory from "../factories/HeaderFactory.js";
import contactModal from "../utils/contactModal.js";
import { formListener } from "../utils/contactForm.js";

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");
const modal = document.querySelector('#contact_modal');


async function displayData(photographer, medias) {
    const photographerHeader = document.querySelector(".photograph-header")
    const photographerGallery = document.querySelector(".photographer-gallery");

      const path = `assets/photographers_photos/${photographer.name}`
    
      medias.forEach((media) => {
        let item = new FactoryMedia({...media,path:path})
        const element = item.toElement()
        photographerGallery.appendChild(element)
    })
      const header = new HeaderFactory(photographer);
      const userCardDOM = header.toElement();
      photographerHeader.appendChild(userCardDOM);
      modal.innerHTML = contactModal();
      formListener();
    }
  

  
      
  
  async function init() {
    // Récupère les datas des photographes
    
    const photographers = await getPhotographerById(parseInt(photographerId));
    const medias = await getMediaByPhotographers(parseInt(photographerId));

    console.log(photographers,"photographer");
    console.log(medias,"media");

    displayData(photographers, medias);

  }
  
  init();
