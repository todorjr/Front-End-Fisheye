import  PhotographerProfile  from "../model/PhotographerProfile.js"
export default class ArtistFactory{
   constructor(data){
    if (data.portrait !== undefined) {
      return new PhotographerProfile(data)
  } else {
    throw new Error('NOT IMPLEMENTED');

  }
 }
}