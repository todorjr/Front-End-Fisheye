

// export function photographerFactory(data,media){                                 
        
//   function getUserPhoto(){
//     const {portrait,name}  = data;

//     const photoDiv = document.createElement("div");
//     photoDiv.classList.add("flex-item");
    
//     const picture = `assets/photographers/${portrait}`;
//     const img = document.createElement( "img" );
//     img.classList.add("profilPics");
//     img.setAttribute("alt", "photo" +" " + name);
//     img.setAttribute("src",picture);

//     photoDiv.append(img);

//     return photoDiv;
//   }

//   function getUserMedia() {                                     
//     const { name,city, country, tagline} = data;

//     const info = document.createElement("div");

//     const h2 = document.createElement( "h2" );
//     const h3 = document.createElement("h3");
//     const h4 = document.createElement("h4");

//     info.classList.add("flex-item");

//     h2.textContent = name;
//     h3.textContent = city +", "+ country;
//     h4.textContent = tagline;
  
//     info.append(h2);
//     info.append(h3);
//     info.append(h4);

//     return info;
//   }
  
//   function getUserLikes() {
//     const {price} = data;

//     const quantities =document.createElement('div');
//     const likeText = document.createElement('h4');
//     const priceText = document.createElement('h4');

//     const heart = document.createElement( "span" )
//     heart.setAttribute("tabindex", 0)
//     heart.classList.add("heart")
//     heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

//     quantities.classList.add('quantities');
//     likeText.textContent = 711  ;
//     likeText.classList.add('likeText')
//     priceText.textContent = price + "€ /jour";

//     quantities.append(likeText);
//     likeText.appendChild(heart);
//     quantities.append(priceText);

//     return quantities;

//   }

// return{getUserMedia,getUserPhoto,getUserLikes}
// }