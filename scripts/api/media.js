export async function getPhotographerById() {
  const data = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => data);
    console.log(data);
  return data;
}
