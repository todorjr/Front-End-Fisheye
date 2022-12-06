/**
 * A LightBox !
 */
export class LightBox {
    /**
     * @type {HTMLElement}
     */
    element = null

    /**
     * Defines how to resolve media URL to display when clicking prev or next button.
     * 
     * @type {(type: 'prev' | 'next', { id: string, url: string }): { id: string, url: string, type: 'image' | 'video' }}
     */
    mediaResolver = (type, media) => null

    /**
     * @param {HTMLElement} element Element where to render LightBox
     */
    constructor(element) {
        this.element = element
    }

    /**
     * Open the lightbox for the given media.
     * 
     * @param {{ id: string, url: string, type: 'image' | 'video' }} media
     */
    open(media) {
        let mediaElement

        const closeBtn = document.createElement('button')
        const prevBtn = document.createElement('a')
        const nextBtn = document.createElement('a')

        closeBtn.innerHTML = `<i class="fa-solid fa-x"></i>`
        closeBtn.classList.add('close-lightbox')
        closeBtn.setAttribute('title', 'Close lightbox');
        closeBtn.addEventListener('click', e => {
            lightbox.classList.remove('active')
        })

        prevBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`
        prevBtn.classList.add('left-arrow')
        prevBtn.setAttribute('title', 'Previous media');

        prevBtn.addEventListener('click', event => {
            event.preventDefault()
            this.displayPrev(media)
        })


        nextBtn.classList.add('right-arrow')
        nextBtn.setAttribute('title', 'Next media');
        nextBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`

        nextBtn.addEventListener('click', event => {
            event.preventDefault()
            this.displayNext(media)
        })

        if (media.type === 'image') {
            mediaElement = document.createElement('img')
            mediaElement.src = media.url
        } else if (media.type === 'video') {
            mediaElement = document.createElement('video')
            mediaElement.setAttribute("controls", "controls")
            mediaElement.src = media.url
        }

        if (mediaElement) {
            this.element.replaceChildren(closeBtn, prevBtn, mediaElement, nextBtn)
            this.element.classList.add('active')
        }
    }

    /**
     * @param {(type: 'prev' | 'next', { id: string, url: string, type: 'image' | 'video' }): { id: string, url: string, type: 'image' | 'video' }} resolver
     */
    setMediaResolver(resolver) {
        this.mediaResolver = resolver
    }

    displayNext(currentMedia) {
        const nextMedia = this.mediaResolver('next', currentMedia)

        this.open(nextMedia)
    }
    displayPrev(currentMedia) {
        const prevMedia = this.mediaResolver('prev', currentMedia)

        this.open(prevMedia)
    }
}
