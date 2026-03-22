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
  let id = `btn${index}${categoryIndex}`;
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
          <button class="basket-btn" id="${id}" onclick="addToBasket(${index}, ${categoryIndex})"><p>In den Warenkorb</p></button>
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
        <p>${[item.amount]}x</p>
        <p>${item.name}</p>
      </div>
      <div class="button-container">
        <div class="button-positioning">
          <button class="delete" onclick="removeItemFromBasket(${basketIndex})">-</button>
          <h5>${[item.amount]}</h5>
          <button class="add" onclick="increaseAmount(${basketIndex})">+</button>
        </div>
        <div>
          <p>${formatToCurrency(item.price * item.amount)}</p>
        </div>
      </div>
    </div>
  `
}

function getCheckoutTemplate(amounts) {
  return `
    <div class="checkout-container">
      <div class="checkout-flex">
        <p class="basket-subtitle">Zwischensumme:</p>
        <p class="basket-subtitle">${formatToCurrency(amounts.subtotal)}</p>
      </div>
      <div class="checkout-flex">
        <p class="basket-subtitle">Lieferkosten:</p>
        <p class="basket-subtitle">${formatToCurrency(amounts.delivery)}</p>
      </div>
      <div class="checkout-flex">
        <h4 class="basket-subtitle">Gesamt:</h4>
        <h4 class="basket-subtitle">${formatToCurrency(amounts.total)}</h4>
      </div>
      <div class="order-position">
      <button class="order-btn" onclick="openDialog()"><p class="order">Bestellen (${formatToCurrency(amounts.total)})</p></button>
      </div>
      </div>
  `;
}