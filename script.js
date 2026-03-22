function init() {
  renderMenu();
  renderBasket();
}

function renderAll() {
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

function formatToCurrency(currency) {
  let formatted = currency.toFixed(2);
  let dotReplace = formatted.replace('.', ',');
  return dotReplace + '€';
}

function renderBasket(){
  let itemBasketRef = document.getElementById('basket-items');
  let checkoutRef = document.getElementById('checkout-section');
  itemBasketRef.innerHTML = '';

  if (basket.length === 0) {
    itemBasketRef.innerHTML = emptyBasket();
    checkoutRef.innerHTML = '';
    return;
  }
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    let item = basket[basketIndex]
    itemBasketRef.innerHTML += getBasketDishTemplate(item, basketIndex);
  }
  renderTotal()
}

function addToBasket(index, categoryIndex){
  let product = products[index].items[categoryIndex];
  let existingItem = basket.find(item => item.name === product.name);
  if (existingItem) {
    existingItem.amount++;
  }
  else{
      let newItem = {
      'name': product.name,
      'price': product.price,
      'amount': 1}
      basket.push(newItem)
  }
  renderAll()
  updateBasketButtonUI(index, categoryIndex)
}

function updateBasketButtonUI(index, categoryIndex) {
  let btn = document.getElementById(`btn${index}${categoryIndex}`);
  let productName = products[index].items[categoryIndex].name;
  let basketItem = basket.find(item => item.name === productName);

  if (basketItem) {
    btn.classList.add('added-btn');
    btn.innerHTML = `<p class="added-btn-txt">im Warenkorb hinzugefügt</p>`;
  } else {
    btn.classList.remove('added-btn');
    btn.innerHTML = `<p>In den Warenkorb</p>`;
  }
}

function increaseAmount(basketIndex) {
  let item = basket[basketIndex];
  item.amount++;
  renderAll();
}

function removeItemFromBasket(basketIndex) {
  let item = basket[basketIndex];

  if (item.amount > 1) {
    item.amount--;
  } 
  else {
    basket.splice(basketIndex, 1);
  }
  renderAll();
}

function renderTotal(){
  let totalRef = document.getElementById('checkout-section')
  let amounts = getBasketTotal();
  totalRef.innerHTML = getCheckoutTemplate(amounts);
}

function getBasketTotal() {
  let subtotal = 0;
  let delivery = 5.00;
  for (let totalIndex = 0; totalIndex < basket.length; totalIndex++) {
    subtotal += basket[totalIndex].price * basket[totalIndex].amount;
  }
  let total = subtotal + delivery;
  return {
    subtotal: subtotal,
    delivery: delivery,
    total: total
  };
}

function openDialog() {
  let dialogRef = document.getElementById('checkout-dialog');
  basket = [];
  renderAll();
  dialogRef.showModal();
  dialogRef.classList.add('opened');
}

function closeDialog() {
  let dialogRef = document.getElementById('checkout-dialog');
  dialogRef.classList.remove('opened');
  dialogRef.close();
}

function toggleBasket() {
  let basket = document.getElementById('basket-content');
  basket.classList.toggle('show');
}