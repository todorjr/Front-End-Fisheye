/**
 * Returns gallery instance class from photographer header.
 * 
 * @param {*} data 
 * @returns {PhotographerHeader}
 */

import PhotographerHeader from "../model/PhotographerHeader.js";
export default class HeaderFactory {
   constructor(data) {
      if (data.portrait !== undefined) {
         return new PhotographerHeader(data)
      }

      throw new Error('UNKNOWN MEDIA TYPE');
   }
}
