export function photographerGalleryFactory(medias, path) {

    
    function getUserGallery(){
        const galleryDiv = document.createElement("div")
        galleryDiv.classList.add("gallery-images")
        
        medias.forEach(media => {
            const {image, title} = media
            const picture = `${path}/${image}`
            const img = document.createElement( "img" )
            img.classList.add("galleryPics")
            img.setAttribute("alt", title)
            img.setAttribute("src",picture)
            galleryDiv.append(img)
        })
        return galleryDiv
    }

return ({getUserGallery})
}

//! make the gallery today
