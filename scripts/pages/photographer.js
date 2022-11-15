import {getPhotographerById,getMediaByPhotographers} from "../api/index.js";
import FactoryMedia from "../factories/FactoryMedia.js";
import HeaderFactory from "../factories/HeaderFactory.js";
import contactModal from "../utils/contactModal.js";
import { formListener } from "../utils/contactForm.js";

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");
const modal = document.querySelector('#contact_modal');

/**
 * @type {HTMLSelectElement}
 */

// récupérer l'élément HTML du select

const filtersElement = document.querySelector('#filter');

filtersElement.addEventListener('change', function (event) {
  const { value  } = event.currentTarget

  if (value) {
    const sortFunction = mediasSorters[value]

    if (sortFunction) {
      const sortedMedias = sortFunction([ ...medias ])

      displayData(photographers, sortedMedias)
    }
  }
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const mediasSorters = {
  popular: items => items.sort((a, b) => b.likes - a.likes),
  date: items => items.sort((a, b) => new Date(b.date) - new Date(a.date)),
  title: items => items.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }), 
}
// on sauvegarde les données des photographes et fichiers médias
let photographers = []
let medias = []

//  écouter l'évènement change du select pour trier les données selon l'ordre sélectionné
//  appeller la fonction dans "sortFunctions" qui correspond à la valeur du filtre (exemple : sortFunctions.popular(medias) retourne la liste des médias trié par nombre de likes)


async function displayData(photographer, medias) {
  const photographerHeader = document.querySelector(".photograph-header");
  // const photographerHeader = photographerHeaderElement.cloneNode();

  const photographerGallery = document.querySelector(".photographer-gallery");
  // const photographerGallery = photographerGalleryElement.cloneNode();

  const header = new HeaderFactory(photographer);
  const userCardDOM = header.toElement();

  const path = `assets/photographers_photos/${photographer.name}`
  
  medias.forEach((media) => {
    let item = new FactoryMedia({...media,path:path})
    const element = item.toElement()
    photographerGallery.appendChild(element)
  })

  photographerHeader.appendChild(userCardDOM);

  // replace old DOM nodes with new ones containing photographer and medias
  // photographerHeaderElement.parentElement.replaceChild(photographerHeader, photographerHeaderElement)
  // photographerGalleryElement.parentElement.replaceChild(photographerGallery, photographerGalleryElement)

  modal.innerHTML = contactModal();
  formListener();
}

  
async function init () {
  // Récupère les datas des photographes
  photographers = await getPhotographerById(parseInt(photographerId));
  medias = await getMediaByPhotographers(parseInt(photographerId));

  displayData(photographers, medias);
}

init();
