function getCategoryHeaderTemplate(index) {
  return `
    <div class="category-wrapper">
      <section class="dish-title">
        <img class="icon-for-title" src="${products[index].icon}" alt="Logo">
        <h2 id="title-in-dish-title">${products[index].category}</h2>
      </section>
    </div>
  `;
}

function getMenuTemplate(index, categoryIndex) {
  return `
  <div class="mother-container">     
        <section class="order-section">
          <img class="showroom" src="${products[index].items[categoryIndex].image}" alt="${products[index].items[categoryIndex].alt}">
          <div class="positioning-items">
          <div class="positioning-name-price">
            <h4>${products[index].items[categoryIndex].name}</h4>
            <p>${formatToCurrency(products[index].items[categoryIndex].price)}</p>
          </div>
          <div class="positioning-description-button">
            <p>${products[index].items[categoryIndex].description}</p>
          </div>
          </div>
          <button id="basket-btn" onclick="addToBasket(${index}, ${categoryIndex})"><p>In den Warenkorb</p></button>
        </section>
      </div>
  `;
}

function emptyBasket(){
  return `
    <div class="positioning-basket">
      <p class="basket-subtitle">Oh oh... Leider ist dein Warenkorb leer.
      Such dir was schönes aus unserem Sortiment.
      </p>
      <img src="./assets/icons/basket.png" alt="Warenkorb">
    </div>
  `
}

function getBasketDishTemplate(item, basketIndex){
  return `
    <div class="mother-basket">
      <div class="basket-positioning">
        <p>${[basketIndex + 1]}x</p>
        <p>${item.name}</p>
      </div>
      <div class="button-container">
        <div class="button-positioning">
          <button class="delete" onclick="removeItemToBasket()"><img src="./assets/icons/delete.png" alt="Mülleimer"></button>
          <p>${[basketIndex + 1]}</p>
          <button class="add" onclick="addItemToBasket()">+</button>
        </div>
        <div>
          <p>${formatToCurrency(item.price)}</p>
        </div>
      </div>
    </div>
  `
}