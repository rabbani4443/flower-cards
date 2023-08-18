let total = 0;

function clickBtnAll (target){
  const addItemContainer = document.getElementById('add-items');
  const itemFound = target.parentNode.childNodes[1].innerText;
  const li = document.createElement('li');
  li.innerText = itemFound;
  addItemContainer.appendChild(li);

  const priceFound = target.parentNode.childNodes['5'].innerText.split(' ')[1];
  total = parseInt(total) + parseInt(priceFound);
  document.getElementById('total').innerText = total;


  const discountAmountTotal = total * 0.9;
  const discountAmount = total - discountAmountTotal;
document.getElementById('discount').innerText = discountAmount.toFixed(2);

const grandTotal = total * 0.9;
document.getElementById('grand-Total').innerText = grandTotal.toFixed(2);

}