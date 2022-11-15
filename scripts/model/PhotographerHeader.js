import  Photographer  from "../model/Photographer.js";
export default class PhotographerHeader extends Photographer {
    constructor(data){
        super(data)
        this.portrait= data.portrait
        this.likes= data.likes
    }
    
    toElement () {
        const priceCard = document.createElement('div');
        priceCard.classList.add('price-block');
        const price = document.createElement('div');
        price.classList.add('photograph-price');
        price.textContent = this.price + '€/Jour';
        const totalLikes = document.createElement('div');
        totalLikes.classList.add('photograph-likes');
        totalLikes.innerHTML= this.likes
        priceCard.append(totalLikes, price);

        const picture = `assets/photographers/${this.portrait}`;
        const article = document.createElement("article");
        article.setAttribute("tabindex", "0");
        article.classList.add("photographer-header__article");
        const img = document.createElement("img");
        img.setAttribute("alt", this.name);
        img.setAttribute("title","Profil picture");
        img.setAttribute("src", picture);
        img.classList.add("profilPics");
        
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const textContent = document.createElement("p");
        textContent.textContent = this.tagline;
        h2.textContent = this.name;
        const div = document.createElement("div");
        div.classList.add("header-info");
        p.textContent = this.city + "," + " " + this.country;
        p.style.color = "#d3573c";
        p.style.fontSize = "12px";
    
        article.appendChild(img);
        article.appendChild(div);
        article.appendChild(priceCard)
        div.appendChild(h2)
        div.appendChild(p);
        div.appendChild(textContent);
        return article;
    }
}