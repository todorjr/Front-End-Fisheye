import { getPhotographerById, getMediaByPhotographers } from "../api/index.js";
import FactoryMedia from "../factories/FactoryMedia.js";
import HeaderFactory from "../factories/HeaderFactory.js";
import contactModal from "../utils/contactModal.js";
import { formListener } from "../utils/contactForm.js";

import { LightBox } from "../utils/LightBox.js";

const MEDIA_BASE_PATH = photographer => `assets/photographers_photos/${photographer.name}`

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

//  écouter l'évènement change du select pour trier les données selon l'ordre sélectionné
//  appeller la fonction dans "sortFunctions" qui correspond à la valeur du filtre (exemple : sortFunctions.popular(medias) retourne la liste des médias trié par nombre de likes)
async function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photograph-header");

  const header = new HeaderFactory(photographer);
  const userCardDOM = header.toElement();

  photographerHeader.appendChild(userCardDOM);
}

async function displayData(photographer, medias, lightbox) {
  const photographerGallery = document.querySelector(".photographer-gallery");

  const listNodeMedia = document.querySelectorAll(".media-gallery-div");
  const sum = 0;
  const totalLikesSum = medias.reduce((acc, { likes }) => acc + likes, sum)
  const heart = document.createElement("span")
  heart.setAttribute("tabindex", 0)
  heart.classList.add("heart")
  heart.setAttribute("id", "heart");
  heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

  const priceCard = document.createElement('div');
  priceCard.classList.add('price-block');
  const price = document.createElement('div');
  price.classList.add('photograph-price');
  price.textContent = photographer.price + '€/Jour';
  let totalLikes = document.createElement('div');
  totalLikes.classList.add('photograph-likes');
  totalLikes.innerHTML = totalLikesSum;
  priceCard.append(totalLikes, heart, price);
  photographerGallery.appendChild(priceCard)

  medias.forEach((media) => {
    let currentNode;
    if (listNodeMedia) {
      const arrayNode = Array.from(listNodeMedia)
      currentNode = arrayNode.find(node => {
        const n = node.getAttribute("data-idMedia")
        const re = Number.parseInt(n) === Number.parseInt(media.id)
        return re
      })
    }
    if (currentNode) {
      photographerGallery.appendChild(currentNode)
    } else {
      let item = new FactoryMedia({ ...media, path: MEDIA_BASE_PATH(photographer) }, lightbox)
      const element = item.toElement()
      photographerGallery.appendChild(element)
    }

  })
}

function displayFilters(photographers, medias) {
  const filtersElement = document.querySelector('#filter');

  filtersElement.addEventListener('change', function (event) {
    const { value } = event.currentTarget

    if (value) {
      const sortFunction = mediasSorters[value]

      if (sortFunction) {
        const sortedMedias = sortFunction(medias)

        displayData(photographers, sortedMedias)
      }
    }
  })
}

function displayContactModal() {
  const modalElement = document.querySelector('#contact_modal')

  modalElement.innerHTML = contactModal();
  formListener();
}

async function init() {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");

  // Récupère les datas des photographes
  const photographer = await getPhotographerById(parseInt(photographerId));
  const medias = await getMediaByPhotographers(parseInt(photographerId));
  console.log(medias, 'medias')

  const lightboxElement = document.querySelector('#lightbox')
  const lightbox = new LightBox(lightboxElement)

  lightbox.setMediaResolver(function (type, { id: currentMediaId }) {  //function to change lightbox media 
    switch (type) {
      case 'next': {
        let nextMediaId = medias.findIndex(({ id }) => id === currentMediaId) + 1
        if (nextMediaId >= medias.length) {
          nextMediaId = 0
        }
        let nextMedia = medias[nextMediaId]
        const lbMedia = nextMedia.image ? nextMedia.image : nextMedia.video

        return {
          id: nextMedia.id,
          url: `${MEDIA_BASE_PATH(photographer)}/${lbMedia}`,
          type: (nextMedia.image !== undefined) ? 'image' : 'video',
        }
      }

      case 'prev': {
        let prevMediaId = medias.findIndex(({ id }) => id === currentMediaId) - 1
        if (prevMediaId < 0) {
          prevMediaId = medias.length - 1
        }
        let prevMedia = medias[prevMediaId]
        const lbMedia = prevMedia.image ? prevMedia.image : prevMedia.video
        return {
          id: prevMedia.id,
          url: `${MEDIA_BASE_PATH(photographer)}/${lbMedia}`,
          type: (prevMedia.image !== undefined) ? 'image' : 'video',
        }
      }
    }
  })


  displayHeader(photographer);
  displayData(photographer, medias, lightbox);
  displayFilters(photographer, medias);
  displayContactModal()
}

document.addEventListener('DOMContentLoaded', init)

// export default function lightBox() {
//   const videos = document.querySelectorAll('video')

//   videos.forEach(video => {
//     video.addEventListener('click', () => {
//       lightbox.classList.add('active')
//       const mp4 = document.createElement('video')
//       mp4.src = video.src
//       mp4.setAttribute("controls", "controls")
//       while (lightbox.firstChild) {
//         lightbox.removeChild(lightbox.firstChild)
//       }
//       lightbox.appendChild(leftArrow)
//       lightbox.appendChild(mp4)
//       lightbox.appendChild(rightArrow)
//       lightbox.appendChild(closeBtn)
//     });
//   })
// }