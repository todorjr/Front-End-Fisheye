import { ImageGalleryElement } from "../model/ImageGalleryElement.js"
import { VideoGalleryElement } from "../model/VideoGalleryElement.js"
export default class FactoryMedia {
    constructor(media, lightbox) {
        if (media.image !== undefined) {
            return new ImageGalleryElement(media, lightbox)
        }
        else if (media.video !== undefined) {
            return new VideoGalleryElement(media, lightbox)
        }

        throw new Error('UNKNOWN MEDIA TYPE');
    }
}
