/**
 * Generate a video element.
 */
import { BaseGalleryElement } from "./BaseGalleryElement.js"

export class VideoGalleryElement extends BaseGalleryElement {
    constructor(media, lightbox) {
        super(media)

        this.video = media.video
        this.lightbox = lightbox
    }

    toElement() {

        const div = document.createElement("div")
        div.classList.add("media-gallery-div")
        const videoDiv = document.createElement("div")
        videoDiv.classList.add("media-container")
        div.setAttribute("data-idMedia", this.id)


        const textDiv = document.createElement("div")
        textDiv.classList.add("text-container")

        const videoData = `${this.path}/${this.video}`

        const mp4 = document.createElement("video")
        mp4.classList.add("galleryPics")
        mp4.setAttribute("controls", "controls")
        mp4.setAttribute("alt", this.title)
        mp4.setAttribute("src", videoData)
        mp4.setAttribute("tabindex", 0)
        mp4.setAttribute("type", "video/mp4")

        if (this.lightbox) {
            mp4.addEventListener("click", (event) => {
                event.preventDefault()
                this.lightbox.open({
                    id: this.id,
                    url: videoData,
                    type: 'video',
                })
            })
        }


        const titleText = document.createElement("h4")
        titleText.classList.add("videoTitle")
        titleText.setAttribute("tabindex", 0)
        titleText.innerText = this.title

        const like = document.createElement("p")
        const heart = document.createElement("span")
        heart.setAttribute("tabindex", 0)
        heart.classList.add("heart")
        heart.innerHTML = `<i class="fa fa-heart-o"></i>
            `
        like.classList.add("imageLike")
        like.textContent = this.likes
        heart.addEventListener("click", () => {

            if (heart.dataset.liked !== 'true') {
                // l'utilisateur n'a pas liké le post, on sauvegarde son like dans le dataset de l'élément et on incrémente le total des likes
                // la valeur est égale à true
                heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
                heart.dataset.liked = 'true';
                like.textContent = ++this.likes
                heart.classList.toggle('red');

            } else {
                // l'utilisateur avait déjà liké le post, on supprime alors son like du dataset de l'élément et on décrémente le total des likes
                // on supprime la valeur dans le dataset
                heart.dataset.liked = undefined;
                like.textContent = --this.likes
                heart.classList.remove('red');
                heart.innerHTML = `<i class="fa fa-heart-o"></i>`
            }
        },)

        textDiv.appendChild(titleText)
        textDiv.appendChild(like)
        textDiv.appendChild(heart)
        videoDiv.appendChild(mp4)
        div.appendChild(videoDiv)
        div.append(textDiv)

        return div
    }
}