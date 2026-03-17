function init() {
  renderMenu();
}

function renderMenu() {
  let contentRef = document.getElementById('main-content');
  contentRef.innerHTML = '';

  for (let index = 0; index < products.length; index++) {
    let category = products[index];
    let items = '';
    
    for (let categoryIndex = 0; categoryIndex < category.items.length; categoryIndex++) {
      let item = category.items[categoryIndex];
      items += `<div>${item.name} - ${item.price}€</div>`
    }
  contentRef.innerHTML += getMenuTemplate(index, items);
  }
}

function formatToCurrency(amount) {
  let formatted = amount.toFixed(2);
  let dotReplace = formatted.replace('.', ',');
  return dotReplace + '€';
}
