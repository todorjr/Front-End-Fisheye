/**
 * Generate a image element.
 */
import { BaseGalleryElement } from "./BaseGalleryElement.js"
export class ImageGalleryElement extends BaseGalleryElement {
    constructor(media){
        super(media)
        this.image= media.image
    }
    
    toElement () {
            const div = document.createElement('div')
            div.classList.add('image-gallery-div')
            const imageDiv = document.createElement("div")
            imageDiv.classList.add("image-container")
    
    
            const textDiv = document.createElement("div")
            textDiv.classList.add("text-container")
    
            const picture = `${this.path}/${this.image}`
    
            const img = document.createElement( "img" )
            img.classList.add("galleryPics")
            img.setAttribute("alt", this.title)
            img.setAttribute("src",picture)
            img.setAttribute("tabindex", 0)
            img.onclick = function () { location.href = `photographer.html?id=${id}`; };
    
    
    
            const titleText = document.createElement( "h4" )
            titleText.classList.add("imageTitle")
            titleText.innerText = this.title
    
            const like = document.createElement( "p" )
            const heart = document.createElement( "span" )
            heart.setAttribute("tabindex", 0)
            heart.classList.add("heart")
            heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
            like.classList.add("imageLike");
            like.textContent=this.likes
            heart.addEventListener("click",()=> {
                console.log('clicked')
                console.log('nb likes', this.likes)
                if (heart.dataset.liked !== 'true') {
                    // l'utilisateur n'a pas liké le post, on sauvegarde son like dans le dataset de l'élément et on incrémente le total des likes
                    // la valeur est égale à true
                    heart.dataset.liked = 'true';
                    like.textContent = ++this.likes
                    console.log('add like', this.likes)
                } else  {
                    // l'utilisateur avait déjà liké le post, on supprime alors son like du dataset de l'élément et on décrémente le total des likes
                    // on supprime la valeur dans le dataset
                    heart.dataset.liked = undefined;
                    like.textContent = --this.likes
                    console.log('remove like', this.likes)
                }
       
            },)
            
         
    
            textDiv.appendChild(titleText)
            textDiv.appendChild(like)
            textDiv.appendChild(heart)

            imageDiv.appendChild(img)
            div.appendChild(imageDiv)
            div.appendChild(textDiv)
         
            
        return div
    }
}
