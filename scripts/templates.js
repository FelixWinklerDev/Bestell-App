function getMenuTemplate(index) {
  return `
  <div class="mother-container">
        <section class="burger-title">
          <img class="burger" src="./assets/icons/burgerlogo.png" alt="Burgerlogo">
          <h2>${products.category}</h2>
        </section>
        <section class="order-section">
          <div class="positioning-name-price">
            <h4>${products.items[index].name}</h4>
            <p>${products.items[index].price}</p>
          </div>
          <div>
            <p>${products.items[index].description}</p>
          </div>
          <div>
            <button id="basket-btn" onclick="addToBasket()">In den Warenkorb</button>
          </div>
        </section>
      </div>
  `;
}
