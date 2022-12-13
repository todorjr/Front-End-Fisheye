/**
 * Class to share common methods between media type.
 */
export class BaseGalleryElement extends EventTarget {

    constructor(media) {
        super()
        this.title = media.title;
        this.date = media.date;
        this.likes = media.likes;
        this.price = media.price;
        this.id = media.id;
        this.photgrapherId = media.photgrapherId;
        this.path = media.path;
    }
    toElement() {
        throw new Error('UNKNOWN TYPE')
    }
}