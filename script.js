function init() {
  renderMenu();
  renderBasket();
}

function renderMenu() {
  let titleRef = document.getElementById('main-content');
  titleRef.innerHTML = '';
  let itemRef = document.getElementById('main-content');
  itemRef.innerHTML = '';

  for (let index = 0; index < products.length; index++) {
    let category = products[index];
    titleRef.innerHTML += getCategoryHeaderTemplate(index);
    
    for (let categoryIndex = 0; categoryIndex < category.items.length; categoryIndex++) {
      let items = category.items[categoryIndex];
      itemRef.innerHTML += getMenuTemplate(index, categoryIndex);
    }
  }
}

function formatToCurrency(amount) {
  let formatted = amount.toFixed(2);
  let dotReplace = formatted.replace('.', ',');
  return dotReplace + '€';
}

function renderBasket(){
  let itemBasketRef = document.getElementById('basket-content');
  itemBasketRef.innerHTML = '';

  if (basket.length === 0) {
    itemBasketRef.innerHTML = emptyBasket();
    return;
  }

  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    let item = basket[basketIndex]
    itemBasketRef.innerHTML += getBasketDishTemplate(item, basketIndex);
  }
  
}

function addToBasket(index, categoryIndex){
  let chosenItem = products[index].items[categoryIndex];
  basket.push(chosenItem);

  renderBasket()
}