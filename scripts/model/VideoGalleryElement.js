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
    
            const videoSection = document.createElement( "div")
            videoSection.classList.add("video-container")
    
            const textDiv = document.createElement("div")
            textDiv.classList.add("text-container")
    
            // const videoData = `${path}/${video}`
    
            const mp4 = document.createElement( "video" )
            mp4.classList.add("galleryPics")
            mp4.setAttribute("controls","controls")
            mp4.setAttribute("alt", this.title)
            // mp4.setAttribute("src",videoData)
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
    
            videoDiv.appendChild(mp4)
            textDiv.appendChild(titleText)
            textDiv.appendChild(like)
            textDiv.appendChild(heart)
    
            videoDiv.append(videoSection)
            videoDiv.append(textDiv)
            // galleryDiv.appendChild(videoDiv)
    
            
        
        return videoDiv
    }
}