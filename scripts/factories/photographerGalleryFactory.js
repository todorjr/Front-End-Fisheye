import FactoryMedia from "./FactoryMedia"

export function photographerGalleryFactory(medias) {
        function getUserGalleryUsingClasses () {
        const galleryDiv = document.createElement("div")
        
        medias.forEach((media) => {
            let item = FactoryMedia(media)
            const element = item.toElement()

            galleryDiv.appendChild(element)
        })

        
        galleryDiv.classList.add("gallery-images")

        return galleryDiv
    }
 
    // function getUserGallery(){
    //     const galleryDiv = document.createElement("div")
    //     galleryDiv.classList.add("gallery-images")
    
        
    //     medias.forEach(media => {
    //     const {image, title, likes, video} = media
    
    //         if(media.video){
    //         const videoDiv = document.createElement("div")
    //         videoDiv.classList.add("container")
    
    //         const videoSection = document.createElement( "div")
    //         videoSection.classList.add("video-container")
    
    //         const textDiv = document.createElement("div")
    //         textDiv.classList.add("text-container")
    
    //         const videoData = `${path}/${video}`
    
    //         const mp4 = document.createElement( "video" )
    //         mp4.classList.add("galleryPics")
    //         mp4.setAttribute("controls","controls")
    //         mp4.setAttribute("alt", title)
    //         mp4.setAttribute("src",videoData)
    //         mp4.setAttribute("tabindex", 0)
    //         mp4.setAttribute("type","video/mp4")
    
    
    //         const titleText = document.createElement( "h4" )
    //         titleText.classList.add("mediaTitle")
    //         titleText.setAttribute("tabindex", 0)
    //         titleText.innerText = title
    
    //         const like = document.createElement( "p" )
    //         const heart = document.createElement( "span" )
    //         heart.setAttribute("tabindex", 0)
    //         heart.classList.add("heart")
    //         heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

    //         heart.addEventListener("click",()=> {
    //             like.textContent++
    //             })
    //         like.classList.add("imageLike")
    //         like.textContent=likes

    
    //         videoDiv.appendChild(mp4)
    //         textDiv.appendChild(titleText)
    //         textDiv.appendChild(like)
    //         textDiv.appendChild(heart)
    
    //         videoDiv.append(videoSection)
    //         videoDiv.append(textDiv)
    //         galleryDiv.appendChild(videoDiv)
    //         }
            
    //         if(media.image){
    //         const container = document.createElement("div")
    //         container.classList.add("container")
    
    //         const imageDiv = document.createElement("div")
    //         imageDiv.classList.add("image-container")
    
    
    //         const textDiv = document.createElement("div")
    //         textDiv.classList.add("text-container")
    
    //         const picture = `${path}/${image}`
    
    //         const img = document.createElement( "img" )
    //         img.classList.add("galleryPics")
    //         img.setAttribute("alt", title)
    //         img.setAttribute("src",picture)
    //         img.setAttribute("tabindex", 0)
    
    
    //         const titleText = document.createElement( "h4" )
    //         titleText.classList.add("mediaTitle")
    //         titleText.innerText = title
    
    //         const like = document.createElement( "p" )
    //         const heart = document.createElement( "span" )
    //         heart.setAttribute("tabindex", 0)
    //         heart.classList.add("heart")
    //         heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
    //         like.classList.add("imageLike");
    //         like.textContent=likes
            

    //         heart.addEventListener("click",()=> {
    //         like.textContent++
    //         },{once:true})

    
    //         imageDiv.appendChild(img)
    //         textDiv.appendChild(titleText)
    //         textDiv.appendChild(like)
    //         textDiv.appendChild(heart)
    //         container.append(imageDiv)
    //         container.append(textDiv)
    //         galleryDiv.appendChild(container)}
    //     })
       
         
    //     return galleryDiv
    // }

    return { getUserGalleryUsingClasses}
}



