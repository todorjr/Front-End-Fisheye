/**
 * Generate a video element.
 */
import { BaseGalleryElement } from "./BaseGalleryElement.js"
export class VideoGalleryElement extends BaseGalleryElement {
    constructor(media){
        super(media)
        this.video= media.video
    };
   
    toElement () {
        
            const videoDiv = document.createElement("div")
            videoDiv.classList.add("container")
    
            const textDiv = document.createElement("div")
            textDiv.classList.add("text-container")
    
            const videoData = `${this.path}/${this.video}`
    
            const mp4 = document.createElement( "video" )
            mp4.classList.add("galleryPics")
            mp4.setAttribute("controls","controls")
            mp4.setAttribute("alt", this.title)
            mp4.setAttribute("src",videoData)
            mp4.setAttribute("tabindex", 0)
            mp4.setAttribute("type","video/mp4")
    
    
            const titleText = document.createElement( "h4" )
            titleText.classList.add("videoTitle")
            titleText.setAttribute("tabindex", 0)
            titleText.innerText = this.title
    
            const like = document.createElement( "p" )
            const heart = document.createElement( "span" )
            heart.setAttribute("tabindex", 0)
            heart.classList.add("heart")
            heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
            like.classList.add("imageLike")
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
            
            videoDiv.appendChild(mp4)
            videoDiv.append(textDiv)
    
        return videoDiv
    }
}