function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("alt", name);
    img.setAttribute("title","Profil picture");
    img.setAttribute("src", picture);
    img.classList.add("profilPics");
    img.onclick = function () { location.href = "photographer.html"; };
    const h2 = document.createElement("h2");
    const euroSign = "\u20AC";
    const p = document.createElement("p");
    const textContent = document.createElement("p");
    const priceElement = document.createElement("p");
    textContent.textContent = tagline;
    h2.textContent = name;
    const div = document.createElement("div");

    p.textContent = city + "," + " " + country;
    p.style.color = "#d3573c";
    p.style.fontSize = "12px";
    priceElement.textContent = price + euroSign + "/jour";
    priceElement.style.color = "grey";
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(div);
    div.appendChild(p);
    div.appendChild(textContent);
    div.appendChild(priceElement);
    return article;
  }
  return { picture, data, getUserCardDOM };
}

// ************************************************************************************************
