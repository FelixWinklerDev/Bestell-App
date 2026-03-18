function getCategoryHeaderTemplate(index) {
  return `
    <div class="category-wrapper">
      <section class="dish-title">
        <img class="icon-for-title" src="${products[index].icon}" alt="Logo">
        <h2>${products[index].category}</h2>
      </section>
    </div>
  `;
}

function getMenuTemplate(index, categoryIndex) {
  return `
  <div class="mother-container">     
        <section class="order-section">
          <img class="showroom" src="${products[index].items[categoryIndex].image}" alt="${products[index].items[categoryIndex].alt}">
          <div class="positioning-name-price">
            <h4>${products[index].items[categoryIndex].name}</h4>
            <p>${products[index].items[categoryIndex].price}</p>
          </div>
          <div>
            <p>${products[index].items[categoryIndex].description}</p>
          </div>
          <div>
            <button id="basket-btn" onclick="addToBasket()">In den Warenkorb</button>
          </div>
        </section>
      </div>
  `;
}