async function getData() {
  const data = await fetch("data/photographers.json")
  const photographersResults= await data.json()
  return photographersResults
}


export async function getPhotographers() {
  const data = await getData();
  return data.photographers
}

export async function getPhotographerById(id) {
  const data = await getData();
  return data.photographers.find((p) => p.id === id);
}

export async function getMediaByPhotographers(id) {
  const data = await getData();
  return data.media.filter(m => m.photographerId === id);
}
