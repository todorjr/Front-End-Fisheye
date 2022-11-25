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
      const sortedMedias = sortFunction(medias)

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
async function displayHeader (photographer) {
  const photographerHeader = document.querySelector(".photograph-header");
  
  const header = new HeaderFactory(photographer);
  const userCardDOM = header.toElement();
  photographerHeader.appendChild(userCardDOM);
  modal.innerHTML = contactModal();
  formListener();
}

export default function lightBox ()  {
  const lightbox = document.getElementById('lightbox')
  const images = document.querySelectorAll('img')

  const closeBtn = document.createElement('button')
  closeBtn.innerHTML = `<i class="fa-solid fa-x"></i>`
  closeBtn.classList.add('close-lightbox')
  closeBtn.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })

  const rightArrow = document.createElement ('a')
  rightArrow.classList.add('right-arrow')
  rightArrow.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`

  const leftArrow = document.createElement ('a')
  leftArrow.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`
  leftArrow.classList.add('left-arrow')

  images.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.classList.add('active')
      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(leftArrow)
      lightbox.appendChild(img)
      lightbox.appendChild(rightArrow)
      lightbox.appendChild(closeBtn)
    });
  })
  const videos = document.querySelectorAll('video')
  videos.forEach(video => {
    video.addEventListener('click', () => {
      lightbox.classList.add('active')
      const mp4 = document.createElement('video')
      mp4.src = video.src
      mp4.setAttribute("controls","controls")
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(leftArrow)
      lightbox.appendChild(mp4)
      lightbox.appendChild(rightArrow)
      lightbox.appendChild(closeBtn)
    });
  })
}

async function displayData(photographer, medias) {
  const photographerGallery = document.querySelector(".photographer-gallery");
  const path = `assets/photographers_photos/${photographer.name}`
  const listNodeMedia=document.querySelectorAll(".media-gallery-div");
  const sum = 0;
  const totalLikesSum = medias.reduce((acc, { likes }) => acc + likes, sum)
  const heart = document.createElement( "span" )
  heart.setAttribute("tabindex", 0)
  heart.classList.add("heart")
  heart.setAttribute("id","heart");
  heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

  const priceCard = document.createElement('div');
  priceCard.classList.add('price-block');
  const price = document.createElement('div');
  price.classList.add('photograph-price');
  price.textContent = photographer.price + '€/Jour';
  let totalLikes = document.createElement('div');
  totalLikes.classList.add('photograph-likes');
  totalLikes.innerHTML = totalLikesSum;
  priceCard.append(totalLikes,heart, price);
  photographerGallery.appendChild(priceCard)

  medias.forEach((media) => {
    let currentNode;
    if(listNodeMedia){
      const arrayNode=Array.from(listNodeMedia)
      currentNode = arrayNode.find(node=>{
        const n = node.getAttribute("data-idMedia")
        const re = Number.parseInt(n) === Number.parseInt(media.id)
        return re
      })
    }
    if(currentNode){
      photographerGallery.appendChild(currentNode)
    }else {
      let item = new FactoryMedia({...media,path:path})
      const element = item.toElement()
      photographerGallery.appendChild(element)
    }
   
  })

}

async function init () {
  // Récupère les datas des photographes
  photographers = await getPhotographerById(parseInt(photographerId));
  medias = await getMediaByPhotographers(parseInt(photographerId));
  displayHeader(photographers)
  displayData(photographers, medias);
}

init();