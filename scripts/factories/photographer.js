// export function photographerFactory(data) {
//   const { name, portrait, city, country, tagline, price ,id} = data;


//   function getUserCardDOM() {
//     const picture = `assets/photographers/${portrait}`;
//     const article = document.createElement("article");
//     article.setAttribute("tabindex", "0");
//     article.classList.add("photographer-article");
//     const img = document.createElement("img");
//     img.setAttribute("alt", name);
//     img.setAttribute("title","Profil picture");
//     img.setAttribute("src", picture);
//     img.classList.add("profilPics");
//     img.onclick = function () { location.href = `photographer.html?id=${id}`; };
//     article.addEventListener("keypress", ()=>{
//       window.location.href=`photographer.html?id=${id}`});  
//     const h2 = document.createElement("h2");
//     const euroSign = "\u20AC";
//     const p = document.createElement("p");
//     const textContent = document.createElement("p");
//     const priceElement = document.createElement("p");
//     textContent.textContent = tagline;
//     h2.textContent = name;
//     const div = document.createElement("div");
//     p.textContent = city + "," + " " + country;
//     p.style.color = "#d3573c";
//     p.style.fontSize = "12px";
//     priceElement.textContent = price + euroSign + "/jour";
//     priceElement.style.color = "grey";
//     article.appendChild(img);
//     article.appendChild(h2);
//     article.appendChild(div);
//     div.appendChild(p);
//     div.appendChild(textContent);
//     div.appendChild(priceElement);
//     return article;
//   }
//   return { data, getUserCardDOM };
// }

//! reconstruction function for HTML elements

//* home page accessibility with keyboard navigation

function handleLeft() {
  window.scrollBy(-1 * window.innerWidth, 0);
}
function handleRight() {
  window.scrollBy(window.innerWidth, 0);
}
function handleUp() {
  window.scrollBy(0, -1 * window.innerHeight);
}
function handleDown() {
  window.scrollBy(0, window.innerHeight);
}

document.onkeydown = function(e) {
  let evt = e || window.event; // for more compatibility
  let keyCode = evt.keyCode;

  console.log(keyCode + " was pressed");

  switch(keyCode) {
      case 37: // left key was pressed
          handleLeft();
          e.preventDefault(); // prevents the default behaviour to trigger
          break;
      case 38: // up key was pressed
          handleUp();
          e.preventDefault();
          break;
      case 39: // right key was pressed
          handleRight();
          e.preventDefault();
          break;
      case 40: // down key was pressed
          handleDown();
          e.preventDefault();
          break;
      default:
          break;
  }
}