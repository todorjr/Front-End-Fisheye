/**
 * Generate a image element.
 */

class ImageGalleryElement extends BaseGalleryElement {
    constructor(media){
        super(media)
        this.image= media.image
    }
    
    toElement () {

    
            const imageDiv = document.createElement("div")
            imageDiv.classList.add("image-container")
    
    
            const textDiv = document.createElement("div")
            textDiv.classList.add("text-container")
    
            const picture = `${path}/${image}`
    
            const img = document.createElement( "img" )
            img.classList.add("galleryPics")
            img.setAttribute("alt", title)
            img.setAttribute("src",picture)
            img.setAttribute("tabindex", 0)
    
    
            const titleText = document.createElement( "h4" )
            titleText.classList.add("imageTitle")
            titleText.innerText = title
    
            const like = document.createElement( "p" )
            const heart = document.createElement( "span" )
            heart.setAttribute("tabindex", 0)
            heart.classList.add("heart")
            heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
            like.classList.add("imageLike");
            like.textContent=likes
    
            imageDiv.appendChild(img)
            textDiv.appendChild(titleText)
            textDiv.appendChild(like)
            textDiv.appendChild(heart)
            container.append(imageDiv)
            container.append(textDiv)
            galleryDiv.appendChild(container)
            
        return imageDiv
    }
}
