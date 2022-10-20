/**
 * Generate a image element.
 */

import  Photographer  from "../model/Photographer.js";

 export default class PhotographerProfile extends Photographer {
    constructor(data){
        super(data)
        this.portrait= data.portrait
    }
    
    toElement () {
        const imgLink= document.createElement('a');
        imgLink.setAttribute('href',`photographer.html?id=${this.id}`);
        const picture = `assets/photographers/${this.portrait}`;
        const article = document.createElement("article");
        article.setAttribute("tabindex", "0");
        article.classList.add("photographer-article");
        const img = document.createElement("img");
        img.setAttribute("alt", this.name);
        img.setAttribute("title","Profil picture");
        img.setAttribute("src", picture);
        img.classList.add("profilPics");
        imgLink.onclick = function () { location.href = `photographer.html?id=${this.id}`; };
        article.addEventListener("keypress", ()=>{
          window.location.href=`photographer.html?id=${this.id}`});  
        const h2 = document.createElement("h2");
        const euroSign = "\u20AC";
        const p = document.createElement("p");
        const textContent = document.createElement("p");
        const priceElement = document.createElement("p");
        textContent.textContent = this.tagline;
        h2.textContent = this.name;
        const div = document.createElement("div");
        p.textContent = this.city + "," + " " + this.country;
        p.style.color = "#d3573c";
        p.style.fontSize = "12px";
        priceElement.textContent = this.price + euroSign + "/jour";
        priceElement.style.color = "grey";
        article.appendChild(img);
        div.appendChild(imgLink)
        article.appendChild(h2);
        article.appendChild(div);
        div.appendChild(p);
        div.appendChild(textContent);
        div.appendChild(priceElement);
        return article;
    }
}
