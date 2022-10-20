/**
 * Class to share common methods between media type.
 */
 export default class Photographer {
    
    constructor(data) {
        this._name = data.name;
        this.city = data.city;
        this.tagline = data.tagline;
        this.country = data.country;
        this.price = data.price;
        this.id = data.id;
        this.photgrapherId = data.photgrapherId;
    }
    toElement () {
        throw new Error('UNKNOWN TYPE')
    }
}