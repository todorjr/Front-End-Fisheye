/**
 * Generate a image element.
 */
import { BaseGalleryElement } from "./BaseGalleryElement.js"

export class ImageGalleryElement extends BaseGalleryElement {
    constructor(media, lightbox) {
        super(media)

        this.lightbox = lightbox
        this.image = media.image
        this.id = media.id
    }

    toElement() {
        const div = document.createElement('div')
        div.classList.add('media-gallery-div')
        div.setAttribute("data-idMedia", this.id)
        const imageDiv = document.createElement("div")
        imageDiv.classList.add("media-container")
        const textDiv = document.createElement("div")
        textDiv.classList.add("text-container")
        const picture = `${this.path}/${this.image}`

        const img = document.createElement("img")
        img.classList.add("galleryPics")
        img.setAttribute("alt", this.title)
        img.setAttribute("title", this.title)
        img.setAttribute("src", picture)
        img.setAttribute("tabindex", 0)

        if (this.lightbox) {
            img.addEventListener("click", (event) => {
                event.preventDefault()
                this.lightbox.open({
                    id: this.id,
                    url: picture,
                    type: 'image',
                })
            })

            img.onkeydown = event => {
                if (event.key === 'Enter') {
                    event.preventDefault()
                    this.lightbox.open({
                        id: this.id,
                        url: picture,
                        type: 'image',
                    })
                }
            }

            const titleText = document.createElement("h4")
            titleText.classList.add("imageTitle")
            titleText.innerText = this.title

            const like = document.createElement("p")
            const heart = document.createElement("span")
            heart.setAttribute("tabindex", 0)
            heart.setAttribute("aria-label", 'likes')

            heart.classList.add("heart")
            heart.setAttribute("id", "heart");
            heart.innerHTML = `<i class="fa fa-heart-o"></i>`
            like.classList.add("imageLike");
            like.textContent = this.likes

            heart.addEventListener("click", event => {

                if (heart.dataset.liked !== 'true') {
                    // l'utilisateur n'a pas liké le post, on sauvegarde son like dans le dataset de l'élément et on incrémente le total des likes
                    // la valeur est égale à true
                    heart.dataset.liked = 'true';
                    like.textContent = ++this.likes
                    heart.classList.toggle('red');
                    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

                    this.dispatchEvent(new CustomEvent('like', { detail: { event, value: 1 } }))

                } else {
                    // l'utilisateur avait déjà liké le post, on supprime alors son like du dataset de l'élément et on décrémente le total des likes
                    // on supprime la valeur dans le dataset
                    heart.dataset.liked = undefined;
                    like.textContent = --this.likes
                    heart.classList.remove('red');
                    heart.innerHTML = `<i class="fa fa-heart-o"></i>`

                    this.dispatchEvent(new CustomEvent('like', { detail: { event, value: -1 } }))
                }
            },)

            heart.onkeydown = event => {
                if (event.key === 'Enter') {
                    if (heart.dataset.liked !== 'true') {
                        // l'utilisateur n'a pas liké le post, on sauvegarde son like dans le dataset de l'élément et on incrémente le total des likes
                        // la valeur est égale à true
                        heart.dataset.liked = 'true';
                        like.textContent = ++this.likes
                        heart.classList.toggle('red');
                        heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

                        this.dispatchEvent(new CustomEvent('like', { detail: { event, value: 1 } }))

                    } else {
                        // l'utilisateur avait déjà liké le post, on supprime alors son like du dataset de l'élément et on décrémente le total des likes
                        // on supprime la valeur dans le dataset
                        heart.dataset.liked = undefined;
                        like.textContent = --this.likes
                        heart.classList.remove('red');
                        heart.innerHTML = `<i class="fa fa-heart-o"></i>`

                        this.dispatchEvent(new CustomEvent('like', { detail: { event, value: -1 } }))
                    }
                }
            }


            textDiv.appendChild(titleText)
            textDiv.appendChild(like)
            textDiv.appendChild(heart)

            imageDiv.appendChild(img)
            div.appendChild(imageDiv)
            div.appendChild(textDiv)


            return div
        }
    }
}
