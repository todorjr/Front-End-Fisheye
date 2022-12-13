// getData() function // we are now have access to all data from data.json file
async function getData() {
  const data = await fetch("data/photographers.json")
  const photographersResults = await data.json()
  return photographersResults
}

// getPhotographers() function will return all photographers 
export async function getPhotographers() {
  const data = await getData();
  return data.photographers
}

// getPhotographerById() function will return photographer by id 
export async function getPhotographerById(id) {
  const data = await getData();
  return data.photographers.find((p) => p.id === id);
}
// getMediaByPhotographers() function will retunr all media for given id/ photographer
export async function getMediaByPhotographers(id) {
  const data = await getData();
  return data.media.filter(m => m.photographerId === id);
}
