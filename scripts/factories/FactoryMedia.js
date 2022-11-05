import {ImageGalleryElement} from "../model/ImageGalleryElement.js"
import {VideoGalleryElement} from "../model/VideoGalleryElement.js"
export default class FactoryMedia{
   constructor(media){
    if (media.image !== undefined) {
      return new ImageGalleryElement(media)
  }
  
  else if (media.video !== undefined) {
      return new VideoGalleryElement(media)
  }

  throw new Error('UNKNOWN MEDIA TYPE');
   }
}
