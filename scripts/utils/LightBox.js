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
        prevBtn.setAttribute("tabindex", 0)
        prevBtn.addEventListener('click', event => {
            event.preventDefault()
            this.displayPrev(media)
        })

        nextBtn.classList.add('right-arrow')
        nextBtn.setAttribute('title', 'Next media');
        nextBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`
        nextBtn.setAttribute("tabindex", 0)

        nextBtn.addEventListener('click', event => {
            event.preventDefault()
            this.displayNext(media)
        })

        closeBtn.onkeydown = event => {
            if (event.key === 'Escape' || event.key === 'Enter') {
                event.preventDefault()
                lightbox.classList.remove('active')
            }
        }
        nextBtn.onkeydown = event => {
            if (event.key === 'ArrowRight' || event.key === 'Enter') {
                event.preventDefault()
                this.displayNext(media)
            }
        }
        prevBtn.onkeydown = event => {
            if (event.key === 'ArrowLeft' || event.key === 'Enter') {
                event.preventDefault()
                this.displayPrev(media)
            }
        }

        if (media.type === 'image') {
            mediaElement = document.createElement('img')
            mediaElement.src = media.url
            mediaElement.setAttribute("tabindex", 0)

        } else if (media.type === 'video') {
            mediaElement = document.createElement('video')
            mediaElement.setAttribute("controls", "controls")
            mediaElement.setAttribute("tabindex", 0)
            mediaElement.src = media.url
        }

        if (mediaElement) {

            this.element.replaceChildren(closeBtn, prevBtn, mediaElement, nextBtn)
            this.element.classList.add('active')
            const lightbox = document.getElementById("lightbox");

            const firstFocusableElement = lightbox.querySelector(".left-arrow"); // get first element to be focused inside modal
            const lastFocusableElement = lightbox.querySelector(".close-lightbox"); // get last element to be focused inside modal

            document.addEventListener('keydown', function (e) {
                let isTabPressed = e.key === 'Tab';

                if (!isTabPressed) {
                    return;
                }
                if (e.shiftKey) { // if shift key pressed for shift + tab combination
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus(); // add focus for the last focusable element
                    }
                } else { // if tab key is pressed
                    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                        e.preventDefault();
                        firstFocusableElement.focus(); // add focus for the first focusable element
                    }
                }
            });

            lastFocusableElement.focus();
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

