import { getPhotographerById } from "../api/media.js";

export function photographerGalleryFactory(data) {

const {title,image,price,date,likes,name} = data;

    function getUserGallery(){
        const galleryDiv = document.createElement("div");
        galleryDiv.classList.add("gallery-images");
        
        const picture = `assets/photographers_photos/${name}/${image}`;
        const img = document.createElement( "img" );
        img.classList.add("galleryPics");
        img.setAttribute("alt", "photo" +" " + title);
        img.setAttribute("src",picture);
        
        galleryDiv.append(img);
        
        return galleryDiv;
    }
return ({getUserGallery});
}

//! make the gallery today
