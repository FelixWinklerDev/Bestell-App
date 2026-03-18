function init() {
  renderMenu();
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
