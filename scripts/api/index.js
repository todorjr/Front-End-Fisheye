async function getData() {
  const data = await fetch("data/photographers.json")
  const photographersResults= await data.json()
  return photographersResults
}


export async function getPhotographers() {
  const data = await getData();
  return data.photographers
    // .then((res) => res.json())
    // .then((data) => data);
    // console.log("data" ,data.photographers);
  // return data.photographers;
}

export async function getPhotographerById(id) {
  const data = await getData();
  console.log(data,"data");
  return data.photographers.find((p) => p.id === id);

    // .then((res) => res.json())
    // .then((data) => data);
  //   console.log(data);
  // return data;
}