class likesCounter {
    constructor(likes, price) {
      this.likes = likes;
      this.price = price;
    }
  
    createPhotographerLikesCounter() {
      const counter = document.createElement("div");
      counter.classList.add("photographer-likes-counter");
  
      const counterContent = `
          <p>
            <span id="total_likes_number">${this.likes}</span>
            <span><img src="assets/icons/heart-black.svg" alt="heart" /></span>
          </p>
          <p>${this.price}€ / jour</p>
      `;
  
      counter.innerHTML = counterContent;
      return counter;
    }
  }