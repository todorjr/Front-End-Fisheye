async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const data = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => data);
  return data;
}

async function displayData(photographers, media) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  displayData(photographers, media);
}

init();
