export function photographerGalleryFactory(medias, path) {

    
    function getUserGallery(){
        const galleryDiv = document.createElement("div")
        galleryDiv.classList.add("gallery-images")
        
        medias.forEach(media => {
            const {image, title, likes} = media

            const container = document.createElement("div")
            container.classList.add("container")

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
            heart.classList.add("heart")
            heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
            like.classList.add("imageLike")
            like.textContent=likes

            imageDiv.appendChild(img)
            textDiv.appendChild(titleText)
            textDiv.appendChild(like)
            textDiv.appendChild(heart)
            container.append(imageDiv)
            container.append(textDiv)
            galleryDiv.appendChild(container)
        })
        return galleryDiv
    }

return ({getUserGallery})
}

//! make the gallery today
