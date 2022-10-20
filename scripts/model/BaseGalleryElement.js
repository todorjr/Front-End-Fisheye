/**
 * Class to share common methods between media type.
 */
export class BaseGalleryElement {
    
    constructor(media) {
        this.title = media.title;
        this.date = media.date;
        this.likes = media.likes;
        this.price = media.price;
        this.id = media.id;
        this.photgrapherId = media.photgrapherId;
    }
    // get title() { 
    //     return this.title;
    // }
    // get date() { 
    //     return this.date;
    // }
    // get likes() { 
    //     return this.likes;
    // }
    // get price() { 
    //     return this.price;
    // }
    // get id() { 
    //     return this.id;
    // }
    // get photgrapherId() {
    //     return this.photgrapherId;
    // }
    toElement () {
        throw new Error('UNKNOWN TYPE')
    }
}