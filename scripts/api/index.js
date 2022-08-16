export async function getPhotographers() {
  const data = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => data);
    console.log(data);
  return data;
}
