
import { getPhotographerById, getMediaByPhotographers } from "../api/index.js";
import { getGalleryElement } from "../factories/FactoryMedia.js";
import HeaderFactory from "../factories/HeaderFactory.js";
import contactModal from "../utils/contactModal.js";
import { formListener } from "../utils/contactForm.js";
import { LightBox } from "../utils/LightBox.js";

const MEDIA_BASE_PATH = photographer => `assets/photographers_photos/${photographer.name}`

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// mediasSorters() will return the same elements of items but now sorted by date,title or popularity
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

// displayHeader() function will append header content in photographer page
async function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photograph-header");
  const header = new HeaderFactory(photographer);
  const userCardDOM = header.toElement();
  photographerHeader.appendChild(userCardDOM);
}

// displayData() function will create gallery elements for a given id/ photographer
async function displayData(photographer, medias, lightbox) {
  const photographerGallery = document.querySelector(".photographer-gallery");
  const listNodeMedia = document.querySelectorAll(".media-gallery-div");
  const heart = document.createElement("span")
  heart.setAttribute("tabindex", 0)
  heart.classList.add("heartPrice")
  heart.setAttribute("id", "heart");
  heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
  const priceCard = document.createElement('div');
  priceCard.classList.add('price-block');
  const price = document.createElement('div');
  const sum = 0;
  price.classList.add('photograph-price');
  price.textContent = photographer.price + '€/Jour';
  let totalLikesSum = medias.reduce((acc, { likes }) => acc + likes, sum)
  let totalLikes = document.createElement('div');
  totalLikes.classList.add('photograph-likes');
  totalLikes.textContent = totalLikesSum
  priceCard.append(totalLikes, heart, price);
  photographerGallery.appendChild(priceCard)

  // computeTotalLikes() function will watch for changes and every time when heart is clicked and like is added or removed, total number of likes will be updated
  function computeTotalLikes(idMedia) {
    const media = document.querySelector(`[data-idMedia = '${idMedia}']`)
    const mediaHeart = media.querySelector('.heart')

    if (mediaHeart.dataset.liked !== 'true') {
      totalLikesSum = totalLikesSum - 1
      totalLikes.textContent = totalLikesSum

    }
    else {
      totalLikesSum = totalLikesSum + 1
      totalLikes.textContent = totalLikesSum
    }
  }

  // this forEach prototype prevents media of duplicating, if some media element exist, it will be replaced by 'currentNode', else we will have completly new element
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
      let item = getGalleryElement({ ...media, path: MEDIA_BASE_PATH(photographer) }, lightbox)
      const element = item.toElement()
      item.addEventListener('like', function (event) {
        computeTotalLikes(media.id)
      })
      photographerGallery.appendChild(element)
    }

  })
}

//  displayFilters() function listen to the change event of the select to sort the data according to the selected order  
//  call the function in "sortFunctions" which corresponds to the value of the filter 
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
// displayContactModal() function will allow to open and see form
function displayContactModal() {
  const modalElement = document.querySelector('#contact_modal')

  modalElement.innerHTML = contactModal();
  formListener();
}

// init() function initializes the data structures required by the rest of the computation of the aggregate. 
async function init() {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");

  // Récupère les datas des photographes
  const photographer = await getPhotographerById(parseInt(photographerId));
  const medias = await getMediaByPhotographers(parseInt(photographerId));

  const lightboxElement = document.querySelector('#lightbox')
  const lightbox = new LightBox(lightboxElement)

  //setMediaResolver function to change lightbox media when arrows are triggered
  lightbox.setMediaResolver(function (type, { id: currentMediaId }) {
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

  // Calling all functions
  displayHeader(photographer);
  displayData(photographer, medias, lightbox);
  displayFilters(photographer, medias);
  displayContactModal()
}


// DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener('DOMContentLoaded', init)

