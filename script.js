function init() {
  renderMenu();
}

//function renderMenu() {
//  let contentRef = document.getElementById('main-content');
//  contentRef.innerHTML = '';
//
//  for (let index = 0; index < products.length; index++) {
//    contentRef.innerHTML += getMenuTemplate(index);
//  }
//}

function formatToCurrency(amount) {
  let formatted = amount.toFixed(2);
  let dotReplace = formatted.replace('.', ',');
  return dotReplace + '€';
}
