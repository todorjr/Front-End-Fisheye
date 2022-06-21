//Mettre le code JavaScript lié à la page photographer.html

fetch("data/photographers.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
