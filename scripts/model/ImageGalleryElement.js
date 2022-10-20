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
    
            imageDiv.appendChild(img)
            imageDiv.appendChild(titleText)
            imageDiv.appendChild(like)
            imageDiv.appendChild(heart)
         
            
        return imageDiv
    }
}
