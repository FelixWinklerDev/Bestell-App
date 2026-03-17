function getMenuTemplate(index) {
  return `
  <div class="mother-container">
        <section class="burger-title">
          <img class="burger" src="./assets/icons/burgerlogo.png" alt="Burgerlogo">
          <h2>${products[index].category}</h2>
        </section>       
        <section class="order-section">
          <div class="positioning-name-price">
            <h4>${products[index].items[index].name[index]}</h4>
            <p>${products[index].items[index].price[index]}</p>
          </div>
          <div>
            <p>${products[index].items[index].description[index]}</p>
          </div>
          <div>
            <button id="basket-btn" onclick="addToBasket()">In den Warenkorb</button>
          </div>
        </section>
      </div>
  `;
}