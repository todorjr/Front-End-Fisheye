
export function photographerFactory(data){                                 
        
  function getUserPhoto(){
    const {portrait,name}  = data;

    const photoDiv = document.createElement("div");
    photoDiv.classList.add("flex-item");
    
    const picture = `assets/photographers/${portrait}`;
    const img = document.createElement( "img" );
    img.classList.add("profilPics");
    img.setAttribute("alt", "photo" +" " + name);
    img.setAttribute("src",picture);

    photoDiv.append(img);

    return photoDiv;
  }

  function getUserMedia() {                                     
    const { name,city, country, tagline} = data;

    const info = document.createElement("div");

    const h2 = document.createElement( "h2" );
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    info.classList.add("flex-item");

    h2.textContent = name;
    h3.textContent = city +", "+ country;
    h4.textContent = tagline;
  
    info.append(h2);
    info.append(h3);
    info.append(h4);

    return info;
  }


return{getUserMedia,getUserPhoto}
}