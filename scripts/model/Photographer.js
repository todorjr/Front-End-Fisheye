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
    get name() { 
        return this._name;
    }
    get city() { 
        return this.city;
    }
    get tagline() { 
        return this.tagline;
    }
    get price() { 
        return this.price;
    }
    get id() { 
        return this.id;
    }
    get photgrapherId() {
        return this.photgrapherId;
    }
    get country() {
        return this.country
    }
    
}